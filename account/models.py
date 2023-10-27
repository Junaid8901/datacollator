from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from . import phone_number_validator,status_choices
# Create your models here.
from .utils import (user_permission_choices )
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("user must have email address")

        user  = self.model(
            email=self.normalize_email(email),
        )
        print('password',password)
        user.set_password (password)
        user.save(using=self.db)
        return user

    def create_superuser(self, email, password=None):
        user  = self.create_user(
            email=self.normalize_email(email),
            password=password,
        )

        user.is_admin=True
        user.is_staff=True
        user.is_owner=True
        user.is_superuser=True
        user.save(using=self.db)
        return user
    
class UserPermission(models.Model):
    code = models.CharField(max_length=120)
    name = models.CharField(max_length=120)

    def __str__(self):
        return str(self.name)


class UserRole(models.Model):
    name = models.CharField(max_length=120)
    permission = models.ManyToManyField(UserPermission)

    def __str__(self):
        return str(self.name)



class CreatedUpdatedMixin(models.Model):
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True




class User(AbstractBaseUser, PermissionsMixin, CreatedUpdatedMixin):
    email                     =models.EmailField(verbose_name="email",max_length=60,unique=True)
    first_name                =models.CharField(max_length=60)
    last_name                 =models.CharField(max_length=60)
    phone                     =models.CharField(max_length=100, validators=[phone_number_validator], null=True, blank=True)
    date_of_birth             =models.DateField(blank=True, null=True)
    status                    =models.CharField(default= "active", max_length=50,choices=status_choices)
    user_role                 =models.ForeignKey(UserRole, on_delete=models.SET_NULL,null=True, blank=True)
    profile_picture           =models.FileField(upload_to='user_profile', null=True, blank=True)
    password                  =models.CharField(max_length=60)
    is_admin                  =models.BooleanField(default=False)
    is_superuser              =models.BooleanField(default=False)
    is_approved               =models.BooleanField(default=False)
    is_verified               =models.BooleanField(default=False)
    is_active                 =models.BooleanField(default=True)
    is_staff                  =models.BooleanField(default=False)
    is_owner                  =models.BooleanField(default=False)

    USERNAME_FIELD   = "email"
    objects= UserManager()

    def __str__ (self):
        return self.email

    def has_perm(self, perm , obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True
    
    def get_permissions_by_role(self):
        if self.is_owner:
            from account.utils import user_permission_choices
            perms = [x[0] for x in user_permission_choices]
            return perms
        if self.user_role is not None:
            return [j.code for j in self.user_role.permission.all()]
        return None




class OtpVerify(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE ,null=True, blank=True)
    otp = models.IntegerField()

    def __str__(self):
        return "%s" % (self.user)

class Department(CreatedUpdatedMixin):
    name                         = models.CharField(max_length=100 , unique=True)
    active                       = models.BooleanField(default=True) 
    
    def __str__(self):
        return "%s" % (self.name)
    
    
def setup_permissions():
    try:
        for i in user_permission_choices:
            try:
                obj, created = UserPermission.objects.get_or_create(
                    code=i[0], name=i[1])
            except Exception as e:
                print("Exception", e)
                pass
    except Exception as e:
        print("exception in permission creation", e)
        
        
        