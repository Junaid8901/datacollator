from django_filters import rest_framework as filters
from .models import User,UserRole, Department

class UserFilter(filters.FilterSet):
    email = filters.CharFilter(field_name="email", label="email", lookup_expr="icontains")
    first_name = filters.CharFilter(field_name="first_name", label="first_name", lookup_expr="icontains")
    department = filters.CharFilter(field_name="department", label="department", lookup_expr="exact")
    last_name = filters.CharFilter(field_name="last_name", label="last_name", lookup_expr="icontains")    
    
    class Meta:
        model = User
        fields = ["email","first_name","last_name","department",]
        
        
class UserRoleFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", label="name", lookup_expr="icontains")   
    
    class Meta:
        model = UserRole
        fields = ["name"]
        
        
class DepartmentFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", label="name", lookup_expr="icontains")   
    
    class Meta:
        model = Department
        fields = ["name"]