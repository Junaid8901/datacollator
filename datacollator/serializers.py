from rest_framework import serializers
from .models import Dbfiles,PcdRefset


class DbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dbfiles
        fields = ['id', 'user', 'file', 'status', 'description', 'created_at', ]
        read_only_fields = ['id', 'user', 'created_at', ]
        
        


class PcdRefsetSerializer(serializers.ModelSerializer):
    class Meta:
        model = PcdRefset
        fields = ['id', 'cluster_id', 'cluster_description', 'snomed_code', 'snomed_code_description', 
                  'pcd_refset_id',"service_ruleset","output_id","service_id","ruleset_id","output_description","type","db_type" ]
        read_only_fields = ['id', ]