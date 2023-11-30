import base64
from datetime import datetime

import pyotp
from django.utils import timezone
from rest_framework import serializers, status
from rest_framework_simplejwt.tokens import RefreshToken
from urllib.parse import unquote
from account.tasks import send_email
from django.conf import settings
from .models import OtpVerify, User, UserPermission, UserRole,Department
from rest_framework.validators import UniqueValidator

# This class returns the string needed to generate the key for OTP


class generateKey:
    @staticmethod
    def returnValue(userObj):
        return str(timezone.now()) + str(datetime.date(datetime.now())) + str(userObj.id)

class NameIdSerializer(serializers.Serializer):
    #for all
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    #for user
    first_name = serializers.CharField(read_only=True)
    last_name = serializers.CharField(read_only=True)
    email = serializers.EmailField(read_only=True)
    policy = serializers.CharField(read_only=True)


class UserListSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=100, required=True, write_only=True)
    # user_role_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            # "username",
            "first_name",
            "last_name",
            "phone",
            "date_of_birth",
            "status",
            "user_role",
            "is_active",
            "created_at",
            "updated_at",
            "profile_picture",
            "password",
        ]
        read_only_fields = ['id']
        extra_kwargs = {
            'user_role': {'write_only': True, 'required': True},
            'phone': {'required': True},
            'profile_picture': {'required': False},
        }

    
class UserCreateSerializer(serializers.ModelSerializer):
    profile_picture = serializers.CharField(max_length=500,required=False)
    password = serializers.CharField(max_length=100, required=True, write_only=True)
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            # "username",
            "first_name",
            "last_name",
            "phone",
            "date_of_birth",
            "status",
            "user_role",
            "created_at",
            "updated_at",
            "profile_picture",
            "password",
        ]
        read_only_fields = ['id']
        extra_kwargs = {
            'user_role': {'write_only': True, 'required': True},
            'phone': {'required': True},
            'department': {'required': True},
            'status': {'required': False},
            'profile_picture': {'required': False},
        }

    def validate(self, attrs):
        email = attrs.get('email', None)
        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError('Email already exists! Please try another email.')
        for field in ["profile_picture"]:
            if field in attrs:
                attrs[field] = unquote(attrs[field]).replace(settings.MEDIA_URL, "")
        return super().validate(attrs)
        # return attrs
    
    
    def to_representation(self, obj):
        self.fields["profile_picture"] = serializers.FileField()
        return super().to_representation(obj)

    def create(self, validated_data):
        # print('validated_data[profile_picture] ... ', validated_data['profile_picture'])
        newuser = User.objects.create(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'], 
            phone=validated_data['phone'],
            email=validated_data['email'],
            user_role=validated_data['user_role'],
        )
        newuser.set_password(validated_data['password'])
        if 'profile_picture' in validated_data:
            profile_picture = validated_data['profile_picture']
            newuser.profile_picture = profile_picture
        if "date_of_birth" in validated_data:
            newuser.date_of_birth = validated_data['date_of_birth']            
        newuser.save()
        return newuser


class UserDetailViewSerializer(serializers.ModelSerializer):
           
    DEPTH_OPEN_FIELDS = [
        "user_role",
    ]
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "phone",
            "date_of_birth",
            "user_role",
            "is_active",
            ]

        read_only_field = ['id', 'email']
        extra_kwargs = {
            'email': {'required': False},
            'is_active': {'required': False},
        }
        


    def to_representation(self, instance):
        data = super().to_representation(instance)
        for field in UserDetailViewSerializer.DEPTH_OPEN_FIELDS:
            data[field] = NameIdSerializer().to_representation(getattr(instance, field))
        return data



class SignInSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=120, required=True, min_length=3)
    password = serializers.CharField(
        max_length=68, min_length=5, write_only=True)
    access_token = serializers.CharField(
        max_length=200, min_length=5, read_only=True)
    refresh_token = serializers.CharField(
        max_length=200, min_length=5, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'access_token',
                  'refresh_token']
        read_only_fields = ['access_token', 'refresh_token', ]


    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        try:
            user = User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            raise serializers.ValidationError(
                {"email": "provided credentials are not valid/email"}, code=status.HTTP_401_UNAUTHORIZED)
            
        if user.user_role == None or user.user_role == "":
            raise serializers.ValidationError(
                    {"password": "provided credentials are not valid (missing user role)"}, code=status.HTTP_401_UNAUTHORIZED)

        if user.is_superuser or user.is_active==False:
            raise serializers.ValidationError(
                    {"password": "provided credentials are not valid"}, code=status.HTTP_401_UNAUTHORIZED)
        if user :
            if not user.check_password(password):
                raise serializers.ValidationError(
                    {"password": "provided credentials are not valid/password"}, code=status.HTTP_401_UNAUTHORIZED)
        if not user:
            raise serializers.ValidationError(
                {"email": "User not found"}, code=status.HTTP_401_UNAUTHORIZED)

        token = RefreshToken.for_user(user)
        attrs['id'] = int(user.id)
        attrs['first_name'] = str(user.first_name)
        attrs['last_name'] = str(user.last_name) 
        attrs['phone'] = str(user.phone)
        attrs['email'] = str(user.email)
        attrs['user_role'] = str(user.user_role)
        attrs['is_owner'] = str(user.is_owner)
        attrs['access_token'] = str(token.access_token)
        attrs['refresh_token'] = str(token)
        return attrs


class ResetPasswordStep1Serializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    def validate(self, attrs):
        email = attrs.get("email", None)
        if email is not None:
            try:
                userObj = User.objects.get(email__iexact=email)
                ext_obj = OtpVerify.objects.filter(user__email__iexact=email)
                if ext_obj:
                    ext_obj.delete()
                key = base64.b32encode(generateKey.returnValue(
                    userObj).encode())  # Key is generated
                otp_key = pyotp.HOTP(key)  # HOTP Model for OTP is created
                otp = otp_key.at(6)
                otp_obj = OtpVerify()
                otp_obj.user = userObj
                otp_obj.otp = otp
                otp_obj.save()
                email_body = 'Enter this OTP to reset your password \n' + \
                    str(otp)
                data = {'email_body': email_body, 'to_email': userObj.email,
                        'email_subject': 'Reset your password'}
                send_email.delay(data)
            except Exception as e:
                print("Exception", e)
                raise serializers.ValidationError(
                    {"email": "Valid email is Required"})
        else:
            raise serializers.ValidationError({"email": "email is required"})
        return attrs


class ResetPasswordStep2Serializer(serializers.Serializer):
    otp = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        otp = attrs.get("otp", None)
        password = attrs.get("password", None)
        if otp:
            try:
                otpobj = OtpVerify.objects.filter(otp=otp).first()
                if otpobj:
                    otpobj.user.set_password(password)
                    otpobj.delete()
                    otpobj.user.save()
                else:
                    raise OtpVerify.DoesNotExist
            except OtpVerify.DoesNotExist:
                raise serializers.ValidationError(
                    {"error": "Valid OTP  is Required"})
        else:
            raise serializers.ValidationError({"error": "email is required"})
        return attrs


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate(self, attrs):
        new_password = attrs.get("new_password", None)
        old_password = attrs.get("old_password", None)
        try:
            user = User.objects.get(email__iexact=str(self.context['user'].email))
        except User.DoesNotExist:
            raise serializers.ValidationError(
                {"error ": "User not found."})
        if not user.check_password(old_password):
            raise serializers.ValidationError(
                {"error": "Incorrect Password"})
        if new_password and len(new_password) > 5:
            if user.check_password(new_password):
                raise serializers.ValidationError(
                    {"error": "New password should not be same as old_password"})
        else:
            raise serializers.ValidationError(
                {"error": "Minimum length of new Password should be greater than 5"})
        return attrs

    def create(self, validated_data):
        user = self.context['user']
        user.set_password(validated_data.get("new_password"))
        user.save()
        return validated_data


class UserPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPermission
        fields = ["id", "name", "code"]
        read_only_fields = ('id',)


class UserRoleListSerializer(serializers.ModelSerializer):

    permissions = serializers.SerializerMethodField()
    name = serializers.CharField(validators=[UniqueValidator(queryset=UserRole.objects.all())])

    class Meta:
        model = UserRole
        fields = ['id', 'name', 'permission', 'permissions']
        read_only_fields = ['id', 'permissions']
        extra_kwargs = {
            'permission': {'write_only': True},
        }

    def get_permissions(self, obj):
        request = self.context.get('request')
        if request.method == "GET":
            permissions = obj.permission.all().count()
            return permissions


class UserRoleDetailSerializer(serializers.ModelSerializer):
    name = serializers.CharField(validators=[UniqueValidator(queryset=UserRole.objects.all())])

    class Meta:
        model = UserRole
        fields = ['id', 'name', 'permission']
        read_only_fields = ['id']

    def __init__(self, instance=None, *args, **kwargs):
        super().__init__(instance=instance, *args, **kwargs)
        request = self.context.get('request')
        if request and (request.method == 'PUT' or request.method == 'PATCH' or request.method == "DELETE"):
            self.Meta.depth = 0
        else:
            self.Meta.depth = 1


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields =['id', "active" , "name", "created_at", "updated_at"] 
        read_only_fields = ['id',"created_at", "updated_at"]
        

                 
