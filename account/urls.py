from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from .models import setup_permissions
from .views import (ChangePasswordView, PermissionListView,
                    ResetPasswordStep1View, ResetPasswordStep2View, SigninView,
                    UserPermissionsView, UserRoleView, UserView,
                    DepartmentView,ProfileView)

urlpatterns = [
    path('user/',                       UserView.as_view(),                 name='signup'),
    path('user/<int:id>/',              UserView.as_view(),                 name='user-list-view'),
    path('signin/',                     SigninView.as_view(),               name='signin'),
    path('userpermissions/',            UserPermissionsView.as_view(),      name='User-permission-list'),
    path('permissions/',                PermissionListView.as_view(),       name='permission-list-view'),
    path('reset/password/',             ResetPasswordStep1View.as_view(),   name='reset-password'),
    path('reset/password/complete/',    ResetPasswordStep2View.as_view(),   name='reset-password-complete'),
    path('changepassword/',             ChangePasswordView.as_view(),       name='change-password'),
    path('verify/token/',               TokenVerifyView.as_view(),          name='verify-token'),
    path('refresh/token/',              TokenRefreshView.as_view(),         name='refresh-token'),
    path('role/',                       UserRoleView.as_view(),             name='user-role-list-create-view'),
    path('role/<int:id>/',              UserRoleView.as_view(),             name='user-role-detail-view'),
    path('department/',                 DepartmentView.as_view(),           name='department-detail-view'),
    path('department/<int:id>/',        DepartmentView.as_view(),           name='department-list-create-view'),
    path('profile/',                    ProfileView.as_view(),              name='profile-list-create-view'),
]

setup_permissions()
