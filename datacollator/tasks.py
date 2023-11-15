import csv
from dateutil import parser
from django.db import transaction
from conf.celery import app
from account.models import User
from datacollator import DbTypeChoices
from django.core.files.uploadedfile import InMemoryUploadedFile
import time
from .models import Dbfiles,PcdRefset



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