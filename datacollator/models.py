from django.db import models
from datacollator import DbTypeChoices
from account.models import User
from datacollator import status_code,STATUS_CHOICES
# Create your models here.


class PcdRefset(models.Model):
    #content_db
    cluster_id               = models.CharField(max_length=300, null=True , blank=True)
    cluster_description      = models.CharField(max_length=300, null=True , blank=True)
    snomed_code              = models.IntegerField(null=True , blank=True)
    snomed_code_description  = models.CharField(max_length=300, null=True , blank=True)
    pcd_refset_id            = models.IntegerField( null=True , blank=True)
    service_ruleset          = models.CharField(max_length=500, null=True , blank=True)
    #content by output db re
    output_id                = models.CharField(max_length=300, null=True , blank=True)
    #output discription db
    service_id               = models.CharField(max_length=300, null=True , blank=True)
    ruleset_id               = models.CharField(max_length=300, null=True , blank=True)
    output_description       = models.TextField(null=True , blank=True)
    type                     = models.CharField(max_length=300, null=True , blank=True)
    db_type                  = models.CharField(max_length=100,null=True, blank=True, choices=DbTypeChoices.db_choices)
    def __str__(self):
        return "{0}".format(str(self.db_type))
    
    

class Dbfiles(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='db_files/')
    status = models.CharField(max_length=100, choices=status_code, blank=True)
    description = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.file.name)

    


class ExportedPcdRefset(models.Model):
    file = models.FileField(upload_to='exported_pcdrefsets/')
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')


    def __str__(self):
        return f"ExportedPcdRefset {self.created_by}"
    

class PcdProject(models.Model):
    pcd_refsets = models.ManyToManyField(PcdRefset)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    total_count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)