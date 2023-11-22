import csv
from dateutil import parser
from django.db import transaction
from conf.celery import app
from account.models import User
from datacollator import DbTypeChoices
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.core.files.base import ContentFile
from datetime import datetime
from .models import Dbfiles,PcdRefset
import csv
from decimal import Decimal
from io import StringIO
from django.contrib.auth.models import User
from .models import ExportedPcdRefset, PcdRefset


@app.task()
def upload_pcd(*args, **kwargs):
    ftp_file = kwargs.get('ftp_file', None)
    id = kwargs['id']
    db_type = kwargs['db_type']
    tempfn = kwargs['file_']

    try:
        modelobj = Dbfiles.objects.get(id=id)
        if db_type == DbTypeChoices.CONTENT:
            content_file_data(tempfn, modelobj, db_type)
        if db_type == DbTypeChoices.CONTENT_BY_OUTPUT:
            content_by_output_file_data(tempfn, modelobj, db_type)
        if db_type == DbTypeChoices.OUTPUT_DESCRIPTION:
            output_description_file_data(tempfn, modelobj, db_type)
    except Dbfiles.DoesNotExist:
        pass
def content_file_data(file_path, modelobj, db_type):
    if modelobj:
        with open(file_path, 'r', encoding="utf8") as file:
            csvreader = csv.reader(file, delimiter=",")
            header = next(csvreader, None)  # Get the header row

            if header is None:
                modelobj.status = 'Unsuccessful'
                modelobj.description = 'CSV file is empty'
                modelobj.save()
                return

            data_list = []

            modelobj.status = 'In progress'
            modelobj.description = 'Reading and validating data'
            modelobj.save()

            for row in csvreader:
                # Check if all expected columns are present
                if len(row) >= 6:
                    try:
                        # Attempt to convert to float and then to int
                        snomed_code = int(float(row[2]))
                        pcd_refset_id = int(float(row[4]))

                        data_dict = {
                            "cluster_id": row[0],
                            "cluster_description": row[1],
                            "snomed_code": snomed_code,
                            "snomed_code_description": row[3],
                            "pcd_refset_id": pcd_refset_id,
                            "service_ruleset": row[5],
                            "db_type": db_type,
                        }
                        data_list.append(data_dict)

                    except (ValueError, IndexError) as e:
                        # Handle non-numeric values or missing columns
                        print(f'Error processing row: {str(e)}')

            try:
                obj_list = [PcdRefset(**data) for data in data_list]
                PcdRefset.objects.bulk_create(obj_list)

                modelobj.status = 'Completed'
                modelobj.description = 'Data saved successfully'
                modelobj.save()

            except Exception as e:
                modelobj.status = 'Unsuccessful'
                modelobj.description = str(e)
                modelobj.save()
    else:
        modelobj.status = 'Unsuccessful'
        modelobj.description = 'File model object not found'
        modelobj.save()
        
        
def content_by_output_file_data(file_path, modelobj, db_type):
    if modelobj:
        with open(file_path, 'r', encoding="utf8") as file:
            csvreader = csv.reader(file, delimiter=",")
            header = next(csvreader, None)  # Get the header row
            if header is None:
                modelobj.status = 'Unsuccessful'
                modelobj.description = 'CSV file is empty'
                modelobj.save()
                return

            data_list = []

            modelobj.status = 'In progress'
            modelobj.description = 'Reading and validating data'
            modelobj.save()

            for row in csvreader:
                # Check if all expected columns are present
                try:
                    # Attempt to convert to float and then to int
                    pcd_refset_id = int(float(row[5]))

                    data_dict = {
                        "output_id": row[0],
                        "cluster_id": row[1],
                        "cluster_description": row[2],
                        "snomed_code_description": row[3],
                        "service_ruleset": row[4],
                        "pcd_refset_id": pcd_refset_id,
                        "db_type": db_type,
                    }
                    
                    data_list.append(data_dict)

                except (ValueError, IndexError) as e:
                    # Handle non-numeric values or missing columns
                    print(f'Error processing row: {str(e)}')

            try:
                obj_list = [PcdRefset(**data) for data in data_list]
                PcdRefset.objects.bulk_create(obj_list)

                modelobj.status = 'Completed'
                modelobj.description = 'Data saved successfully'
                modelobj.save()

            except Exception as e:
                modelobj.status = 'Unsuccessful'
                modelobj.description = str(e)
                modelobj.save()
    else:
        modelobj.status = 'Unsuccessful'
        modelobj.description = 'File model object not found'
        modelobj.save()
        
        
def output_description_file_data(file_path, modelobj, db_type):
    if modelobj:
        with open(file_path, 'r', encoding="utf8") as file:
            csvreader = csv.reader(file, delimiter=",")
            header = next(csvreader, None)  # Get the header row
            if header is None:
                modelobj.status = 'Unsuccessful'
                modelobj.description = 'CSV file is empty'
                modelobj.save()
                return

            data_list = []

            modelobj.status = 'In progress'
            modelobj.description = 'Reading and validating data'
            modelobj.save()

            for row in csvreader:
                # Check if all expected columns are present
                
                try:
                    # Attempt to convert to float and then to int

                    data_dict = {
                        "service_id": row[0],
                        "ruleset_id": row[1],
                        "output_description": row[2],
                        # "snomed_code": snomed_code,
                        "type": row[3],
                        "db_type": db_type,
                    }
                    
                    data_list.append(data_dict)

                except (ValueError, IndexError) as e:
                    # Handle non-numeric values or missing columns
                    print(f'Error processing row: {str(e)}')

            try:
                obj_list = [PcdRefset(**data) for data in data_list]
                PcdRefset.objects.bulk_create(obj_list)

                modelobj.status = 'Completed'
                modelobj.description = 'Data saved successfully'
                modelobj.save()

            except Exception as e:
                modelobj.status = 'Unsuccessful'
                modelobj.description = str(e)
                modelobj.save()
    else:
        modelobj.status = 'Unsuccessful'
        modelobj.description = 'File model object not found'
        modelobj.save()
        
        
@app.task()
def generate_and_save_csv(pcd_ids, exported_pcdrefset_id):
    try:
        # Fetch ExportedPcdRefset
        exported_pcdrefset = ExportedPcdRefset.objects.get(id=exported_pcdrefset_id)

        # Fetch PcdRefset objects based on provided IDs
        pcd_refsets = PcdRefset.objects.filter(id__in=pcd_ids)

        # Create a CSV content
        csv_content = StringIO()
        csv_writer = csv.writer(csv_content)

        # Add "created_by" and "created_at" above the headers and make them bold
        csv_writer.writerow(['created_by:', '', exported_pcdrefset.created_by.email, '', '', ''])
        csv_writer.writerow(['created_at:', '', datetime.now().date(), '', '', ''])
        csv_writer.writerow([])  # Add an empty row for separation

        # Define the desired header fields
        header_fields = ['Cluster_ID', 'Output_ID', 'SNOMED_code', 'SNOMED_code_description', 'PCD Refset ID', 'Service_and_Ruleset']

        csv_writer.writerow(header_fields)  # Write custom header

        # # Create a CSV content
        # csv_writer.writerow(header_fields)  # Write custom header
        for pcd_refset in pcd_refsets:
            # Format refset_id as string to avoid scientific notation
            formatted_refset_id = str(Decimal(pcd_refset.pcd_refset_id))

            # Write data for each field in the custom header
            csv_writer.writerow([
                pcd_refset.cluster_id,
                pcd_refset.output_id,
                pcd_refset.snomed_code,
                pcd_refset.snomed_code_description,
                formatted_refset_id,
                pcd_refset.service_id,
            ])

        # Convert StringIO to ContentFile
        csv_content.seek(0)
        file_name = f'exported_pcdrefset_{exported_pcdrefset.id}.csv'
        exported_pcdrefset.file.save(file_name, ContentFile(csv_content.read()))
        exported_pcdrefset.status = 'success'
        exported_pcdrefset.save()

        # Return relevant information for serialization
        return {
            'exported_pcdrefset_id': exported_pcdrefset.id,
            'status': exported_pcdrefset.status,
            'file_name': file_name,
            # Add any other relevant fields for serialization
        }

    except ExportedPcdRefset.DoesNotExist:
        # Handle the case where the ExportedPcdRefset does not exist
        return {'status': 'error'}