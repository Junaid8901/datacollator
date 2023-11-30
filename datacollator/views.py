from .serializers import DbSerializer,PcdRefsetSerializer,ExportedPcdRefsetSerializer
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from account.utils import CustomPagination
from datacollator import DbTypeChoices
from .models import Dbfiles,PcdRefset,ExportedPcdRefset
from .filters import PcdFilter
from django.core.paginator import Paginator
from .tasks import upload_pcd,generate_and_save_csv
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
            queryset = PcdRefset.objects.all().order_by('-id')[:2000]

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
        
        # Create the ExportedPcdRefset object
        exported_pcdrefset = ExportedPcdRefset(created_by=request.user, status='pending')
        exported_pcdrefset.save()

        # Trigger the Celery task with the ExportedPcdRefset ID
        generate_and_save_csv.delay(pcd_ids=pcd_ids, exported_pcdrefset_id=exported_pcdrefset.id)

        # Return the serialized data in the response
        serializer = self.get_serializer(exported_pcdrefset)
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)