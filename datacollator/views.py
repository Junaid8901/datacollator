from .serializers import DbSerializer,PcdRefsetSerializer,ExportedPcdRefsetSerializer,PcdProjectSerializer
from .models import Dbfiles,PcdRefset,ExportedPcdRefset,PcdProject
from rest_framework import generics, permissions, status
from .tasks import upload_pcd,generate_and_save_csv,delete_pcd
from .filters import PcdFilter,PcdProjectFilter
from rest_framework.response import Response
from django.core.paginator import Paginator
from account.utils import CustomPagination
from rest_framework.views import APIView
from datacollator import DbTypeChoices
import tempfile
import csv
import os
# from .filters import InventoryFilters


class DbFileView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = DbSerializer
    queryset = Dbfiles.objects.all().order_by('-id')
    pagination_class = CustomPagination
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs and request.method == 'GET':
            return self.retrieve(request, *args, **kwargs)
        else:
            return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        db_type = request.data.pop("db_type")
        serializer = self.serializer_class(data=request.data, context={"request": self.request})
        modelobj = None  # initialize modelobj

        try:
            # Validate serializer
            serializer.is_valid(raise_exception=True)
            modelobj = serializer.save(user=self.request.user, status='File uploaded', description="File submitted successfully")

            # Check for valid CSV file
            file_ = request.FILES['file']
            if file_ != '' and ('.csv' in str(file_) or '.CSV' in str(file_)):
                tempf, tempfn = tempfile.mkstemp(suffix='.csv')
                try:
                    for chunk in file_.chunks():
                        os.write(tempf, chunk)
                except Exception as e:
                    modelobj.status = 'Unsuccessful'
                    modelobj.description = str(Exception("Problem with the input file %s" % file_.name))
                    modelobj.save()
                    return Response(status=status.HTTP_400_BAD_REQUEST)

                finally:
                    os.close(tempf)

                # Validate CSV file headers
                with open(tempfn, 'r') as csvfile:
                    reader = csv.reader(csvfile)
                    header = next(reader, None)  # get the header
                    if db_type[0] == DbTypeChoices.CONTENT:
                        # Define the required headers
                        content_file_headers = ['Cluster_ID', 'Cluster_description', 'SNOMED_code', 'SNOMED_code_description', 'PCD Refset ID', 'Service_and_Ruleset']

                        # Check if header is missing or incorrect
                        if header is None or set(content_file_headers) != set(header):
                            modelobj.status = 'Unsuccessful'
                            modelobj.description = 'Invalid CSV file header.'
                            modelobj.save()
                            return Response("Please upload a CSV file with the correct header.", status=status.HTTP_400_BAD_REQUEST)
                        
                    if db_type[0] == DbTypeChoices.OUTPUT_DESCRIPTION:
                        # Define the required headers
                        content_file_headers = ['Service_ID', 'Ruleset_ID', 'Output_ID', 'Output_Description', 'Type']

                        # Check if header is missing or incorrect
                        if header is None or set(content_file_headers) != set(header):
                            modelobj.status = 'Unsuccessful'
                            modelobj.description = 'Invalid CSV file header.'
                            modelobj.save()
                            return Response("Please upload a CSV file with the correct header.", status=status.HTTP_400_BAD_REQUEST)
                        
                    if db_type[0] == DbTypeChoices.CONTENT_BY_OUTPUT:
                        # Define the required headers
                        content_file_headers=['Output_ID', 'Cluster_ID', 'Cluster_Description', 'SNOMED_code', 'SNOMED_code_description', 'PCD Refset ID']

                        # Check if header is missing or incorrect
                        if header is None or set(content_file_headers) != set(header):
                            modelobj.status = 'Unsuccessful'
                            modelobj.description = 'Invalid CSV file header.'
                            modelobj.save()
                            return Response("Please upload a CSV file with the correct header.", status=status.HTTP_400_BAD_REQUEST)

                # pass file to celery task
                upload_pcd.delay(file_=tempfn, id=modelobj.id, db_type=db_type[0])

                modelobj.status = 'File uploaded'
                modelobj.description = 'File submitted for processing.'
                modelobj.save()
                return Response({"id":modelobj.id},status=status.HTTP_200_OK)

            else:
                modelobj.status = 'Unsuccessful'
                modelobj.description = 'CSV File is not valid.'
                modelobj.save()
                return Response("Please, upload a valid .csv file.", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            if modelobj:
                modelobj.status = 'Unsuccessful'
                modelobj.description = str(e)
                modelobj.save()
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


class PcdRefsetView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PcdRefsetSerializer
    pagination_class = CustomPagination
    filterset_class = PcdFilter
    queryset = PcdRefset.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)
            
        
    def get_queryset(self):
        queryset = self.queryset
        if 'id' not in self.kwargs:
            queryset = PcdRefset.objects.all().order_by('-id')

        return queryset

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
    

class ExportedPcdRefsetView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ExportedPcdRefsetSerializer
    pagination_class = CustomPagination
    queryset = ExportedPcdRefset.objects.all().order_by('-id')
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Assuming the request contains 'pcd_ids'
        pcd_ids = request.data.get('pcd_ids', [])
        source = request.data.get('source', 'pcd_data')
        project_id = request.data.get('project_id', None)
        exported_pcdrefset = ExportedPcdRefset(created_by=request.user, status='pending',source=source)
        exported_pcdrefset.save()
        
        if source == "pcd_data":
            # Create the ExportedPcdRefset object
            generate_and_save_csv.delay(pcd_ids=pcd_ids, exported_pcdrefset_id=exported_pcdrefset.id)
        else:
            try:
                instance = PcdProject.objects.get(id=project_id)
            except PcdProject.DoesNotExist:
                return Response({'error': 'PcdProject not found.'}, status=404)
            pcd_refsets_ids = list(instance.pcd_refsets.values_list('id', flat=True))
            generate_and_save_csv.delay(pcd_ids=pcd_refsets_ids, exported_pcdrefset_id=exported_pcdrefset.id)
        # Trigger the Celery task with the ExportedPcdRefset ID

        # Return the serialized data in the response
        serializer = self.get_serializer(exported_pcdrefset)
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
    
    

class PcdProjectAPIView(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PcdProjectSerializer
    filterset_class = PcdProjectFilter
    pagination_class = CustomPagination
    queryset = PcdProject.objects.all().order_by('-id')
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        if 'id' in self.kwargs:
            return self.retrieve(request, *args, **kwargs)
        else:
            return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Assuming the request contains 'pcd_refsets'
        pcd_refsets_ids = request.data.get('pcd_refsets', [])
        project_name = request.data.get('project_name', "")

        # Create the PcdProject object
        pcd_project = PcdProject(total_count=len(pcd_refsets_ids), created_by=request.user, project_name= project_name)
        pcd_project.save()

        # Assign pcd_refsets to the PcdProject
        pcd_project.pcd_refsets.set(pcd_refsets_ids)

        # Return the serialized data in the response
        serializer = self.get_serializer(pcd_project)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        pcd_refsets_ids = request.data.get('pcd_refsets', [])
        project_name = request.data.get('project_name', "")
        remove = request.data.get('remove', False)
        
        if remove:
    
            # Remove any pcd_refsets that are not in the updated list
            current_pcd_refsets_ids = instance.pcd_refsets.values_list('id', flat=True)
            to_remove = set(current_pcd_refsets_ids) - set(pcd_refsets_ids)
            instance.pcd_refsets.remove(*to_remove)

            # Update other fields
            instance.total_count = len(instance.pcd_refsets.all())
            instance.project_name = project_name
            instance.save()
        else:
            instance.pcd_refsets.add(*pcd_refsets_ids)
            instance.total_count = len(instance.pcd_refsets.all())
            instance.save()

        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
class PcdRefsetBulkDeleteView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    def delete(self, request):
        # Get all PcdRefset instances that are associated with any PcdProject
        pcd_refsets_to_exclude = PcdProject.objects.values_list('pcd_refsets', flat=True)
        list_of_exclude_ids=list(set(pcd_refsets_to_exclude))
        print("in delete",list(set(pcd_refsets_to_exclude)))
        # Exclude PcdRefset instances associated with any PcdProject
        delete_pcd.delay(pcd_refsets_to_exclude=list_of_exclude_ids)

        return Response({'success': 'PcdRefsets deleted successfully'}, status=status.HTTP_204_NO_CONTENT)