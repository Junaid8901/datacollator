from django.db.models import Q
from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey
from rest_framework.exceptions import NotFound
from django.db.models import Q
# from account.decorator import permission_required
from account.utils import CustomPagination
from conf import settings
from .filters import UserFilter,DepartmentFilter,UserRoleFilter
from .models import User, UserPermission, UserRole,Department
from .serializers import (ChangePasswordSerializer,
                          ResetPasswordStep1Serializer,
                          ResetPasswordStep2Serializer, SignInSerializer,
                          UserDetailViewSerializer, UserListSerializer,
                          UserPermissionSerializer, UserRoleDetailSerializer,
                          UserRoleListSerializer,DepartmentSerializer
                          , UserCreateSerializer)





class SigninView(generics.GenericAPIView):
    permission_classes = []
    serializer_class = SignInSerializer
    authentication_classes = []

    def post(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": self.request})
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserPermissionsView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user_id = request.data.get('id', None)
        if user_id is not None:
            try:
                userobj = User.objects.get(id=int(user_id))
            except User.DoesNotExist:
                return Response({"user": "Invalid User Choice"}, status=status.HTTP_400_BAD_REQUEST)
            permissions = userobj.get_permissions_by_role()
            return Response({"permissions": permissions}, status=status.HTTP_200_OK)
        else:
            return Response({"user": "valid user is required"}, status=status.HTTP_400_BAD_REQUEST)
    

class UserView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserListSerializer
    pagination_class = CustomPagination
    filterset_class = UserFilter
    queryset = User.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = self.queryset
        if 'id' not in self.kwargs:
            queryset = User.objects.all().order_by('-id')
        return queryset

    def get_serializer_class(self):
        if 'id' in self.kwargs:
            return UserDetailViewSerializer
        else:
            return self.serializer_class

    def post(self, request, *args, **kwargs):
        serializer = UserCreateSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)       
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)


class ChangePasswordView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={
                                           'user': self.request.user})
        if serializer.is_valid():
            serializer.save()
            return Response({'password': ' password changed successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordStep1View(generics.GenericAPIView):
    permission_classes = []
    serializer_class = ResetPasswordStep1Serializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            return Response({'opt': 'successfully send OTP '}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordStep2View(generics.GenericAPIView):
    permission_classes = []
    serializer_class = ResetPasswordStep2Serializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            return Response({'password': 'successfully set New Password'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PermissionListView(generics.ListAPIView, generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserPermissionSerializer
    queryset = UserPermission.objects.all()
    pagination_class = None

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class UserRoleView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserRoleListSerializer
    filterset_class = UserRoleFilter
    pagination_class = CustomPagination
    queryset = UserRole.objects.all().order_by('-id')
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs and request.method == 'GET':
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)

    def get_serializer_class(self):
        if 'id' in self.kwargs:
            return UserRoleDetailSerializer
        else:
            return self.serializer_class

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        # checking if user is deleting his own role
        # user cannot delete his own role
        return super().destroy(request, *args, **kwargs)




class DepartmentView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = DepartmentSerializer
    pagination_class = CustomPagination
    filterset_class = DepartmentFilter
    queryset = Department.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)
    
    def get_queryset(self):
        queryset = self.queryset
        if 'id' not in self.kwargs:
            queryset = Department.objects.all().order_by('-id')
        return queryset

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)




class ProfileView(generics.ListAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserDetailViewSerializer
    pagination_class = None
    queryset = None
    
    
    def get_object(self,*args, **kwargs):
        return User.objects.get(id=self.request.user.id)
    
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    
    def get_queryset(self):
        queryset = self.queryset
        if 'id' not in self.kwargs:
            queryset = User.objects.filter(id=self.request.user.id)
        return queryset
    
    
    def put(self, request, *args, **kwargs):
        serializer = UserDetailViewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def index(request):
    key = 'Api-Key zugkzVoq.z1EhB3wq3vhZsfSJQ2Z51im6smHyml1W'

    context = {
        "apikey": key
    }
    return render(request, 'index.html', context)