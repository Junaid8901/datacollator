from django.urls import path
from .views import DbFileView, PcdRefsetView,ExportedPcdRefsetView

urlpatterns = [
    path('dbfile/',            DbFileView.as_view(),            name='upload-file'),
    path('dbfile/<int:id>/',   DbFileView.as_view(),            name='detail-file'),
    
    path('pcdrefset/',         PcdRefsetView.as_view(),         name='list-view'),
    path('pcdrefset/<int:id>/',   PcdRefsetView.as_view(),         name='pcd-detail-view'),
    
    path('exported/', ExportedPcdRefsetView.as_view(), name='exported_pcdrefset_list'),
    path('exported/<int:id>/', ExportedPcdRefsetView.as_view(), name='exported_pcdrefset_detail'),

]