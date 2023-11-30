from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from .models import setup_permissions
# Register your models here.

from .models import User,OtpVerify,UserPermission,UserRole,Department


class BaseUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email',  'password')}),
        (_('Personal info'), {'fields': ('is_owner', 'first_name', 'last_name', 'phone', "date_of_birth")}),
        (_('Permissions'), {
            'fields': ('is_approved', 'is_active', 'is_staff', 'is_verified',  'is_superuser', 'groups', 'user_permissions', 'user_role'),
        }),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    filter_horizontal = ()
    ordering = ('pk',)
    list_display = ("id", 'email', 'first_name', 'last_name',"is_active")
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('first_name', 'last_name', 'email', 'password1', 'password2',"user_role","is_active"),
        }),)

admin.site.register(User, BaseUserAdmin)
admin.site.register(OtpVerify)
admin.site.register(UserPermission)
admin.site.register(UserRole)
admin.site.register(Department)

setup_permissions()