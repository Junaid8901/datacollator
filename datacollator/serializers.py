from rest_framework import serializers
from .models import Dbfiles,PcdRefset,ExportedPcdRefset, PcdProject


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
        
        

class ExportedPcdRefsetSerializer(serializers.ModelSerializer):
    user_detail=serializers.SerializerMethodField()
    class Meta:
        model = ExportedPcdRefset
        fields = '__all__'
        
    def get_user_detail(self,obj):
        try:
            return {"id":obj.created_by.id,"name":obj.created_by.first_name}
        except:
            return {}
        
        
class PcdProjectSerializer(serializers.ModelSerializer):
    pcd_refsets = PcdRefsetSerializer(many=True)  # Serializer for the ManyToMany field
    total_count = serializers.SerializerMethodField()

    class Meta:
        model = PcdProject
        fields = ['id', 'pcd_refsets', 'created_by', 'total_count', 'created_at', 'updated_at',"project_name"]
        read_only_fields = ['id',"created_at","updated_at" ]
        # Add other fields from the PcdProject model as needed

    def get_total_count(self, obj):
        # Calculate the total count of objects in the ManyToManyField
        return obj.pcd_refsets.count()

    def to_representation(self, instance):
        # Call the parent to_representation method
        representation = super().to_representation(instance)
        # Add the total count to the serialized representation
        representation['total_count'] = self.get_total_count(instance)
        return representation