import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")
import django
django.setup()
from django.db import transaction
from datacollator.models import PcdRefset

all_data = PcdRefset.objects.all()
with transaction.atomic():
    print("here")
    count = 0
    for data in all_data:
        count += 1
        print("deleted.........",count)
        data.delete()