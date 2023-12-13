from django_filters import rest_framework as filters
from .models import PcdRefset,PcdProject

class PcdFilter(filters.FilterSet):
    cluster_id = filters.CharFilter(field_name="cluster_id", label="cluster_id", lookup_expr="icontains")
    pcd_refset_id = filters.CharFilter(field_name="pcd_refset_id", label="pcd_refset_id", lookup_expr="icontains")
    ruleset_id = filters.CharFilter(field_name="ruleset_id", label="ruleset_id", lookup_expr="icontains")
    cluster_description = filters.CharFilter(field_name="cluster_description", label="cluster_description", lookup_expr="icontains")
    snomed_code = filters.CharFilter(field_name="snomed_code", label="snomed_code", lookup_expr="icontains")
    snomed_code_description = filters.CharFilter(field_name="snomed_code_description", label="snomed_code_description", lookup_expr="icontains")
    db_type = filters.CharFilter(field_name="db_type", label="db_type", lookup_expr="exact")
    output_id = filters.CharFilter(field_name="output_id", label="output_id", lookup_expr="icontains")
 
    
    class Meta:
        model = PcdRefset
        fields = ["cluster_id","pcd_refset_id","ruleset_id","cluster_description","snomed_code","snomed_code_description","db_type","output_id"]
        
class PcdProjectFilter(filters.FilterSet):
    project_name = filters.CharFilter(field_name="project_name", label="project_name", lookup_expr="icontains")
 
    
    class Meta:
        model = PcdProject
        fields = ["project_name"]
        