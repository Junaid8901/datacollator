from django.urls import path
from .views import DbFileView, PcdRefsetView

urlpatterns = [
    path('dbfile/',            DbFileView.as_view(),            name='upload-file'),
    path('dbfile/<int:id>/',   DbFileView.as_view(),            name='detail-file'),
    
    path('pcdrefset/',         PcdRefsetView.as_view(),         name='list-view'),
    path('pcdrefset/<int:id>/',   PcdRefsetView.as_view(),         name='pcd-detail-view'),

]