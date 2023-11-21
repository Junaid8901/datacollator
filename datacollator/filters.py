from django_filters import rest_framework as filters
from .models import PcdRefset

class PcdFilter(filters.FilterSet):
    cluster_id = filters.CharFilter(field_name="cluster_id", label="cluster_id", lookup_expr="icontains")
    pcd_refset_id = filters.CharFilter(field_name="pcd_refset_id", label="pcd_refset_id", lookup_expr="icontains")
    ruleset_id = filters.CharFilter(field_name="ruleset_id", label="ruleset_id", lookup_expr="icontains")
    cluster_description = filters.CharFilter(field_name="cluster_description", label="cluster_description", lookup_expr="icontains")
    snomed_code = filters.CharFilter(field_name="snomed_code", label="snomed_code", lookup_expr="icontains")
    snomed_code_description = filters.CharFilter(field_name="snomed_code_description", label="snomed_code_description", lookup_expr="icontains")
    db_type = filters.CharFilter(field_name="db_type", label="db_type", lookup_expr="exact")
 
    
    class Meta:
        model = PcdRefset
        fields = ["cluster_id","pcd_refset_id","ruleset_id","cluster_description","snomed_code","snomed_code_description","db_type"]
        