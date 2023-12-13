from django.contrib import admin
from .models import Dbfiles,PcdRefset,PcdProject 
# Register your models here.

class PcdRefsetFileLogAdmin(admin.ModelAdmin):
    list_display = ['id', 'db_type', 'cluster_id', "snomed_code"]
    search_fields = ('cluster_id',)

admin.site.register(Dbfiles)
admin.site.register(PcdRefset, PcdRefsetFileLogAdmin)
admin.site.register(PcdProject)