from django.urls import path
from . import views

urlpatterns = [
    path('getWhoWeAreType/', views.getWhoWeAreType), # for Who We Are Header
    path('getProgramsAndServicesType/', views.getProgramsAndServicesType), # for Programs And Services Header
    path('getTBL_SatalliteOfficesType/', views.getTBL_SatalliteOfficesType), # for Satallite Offices Header
    path('getTBL_PublicationsType/', views.getTBL_PublicationsType), # for PublicationsType Header
    path('getTBL_StoriesType/', views.getTBL_StoriesType), # for Stories Header
    
    
    path('getAnnouncementsData/',views.getAnnouncementsData),
    path('getAnnouncementData/',views.getAnnouncementsReadmore),

]
