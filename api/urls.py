from django.urls import path
from . import views

urlpatterns = [
    path('getWhoWeAreType/', views.getWhoWeAreType), # for Who We Are Header
    path('getProgramsAndServicesType/', views.getProgramsAndServicesType), # for Programs And Services Header

    
    path('getAnnouncementsData/',views.getAnnouncementsData),
    path('getAnnouncementData/',views.getAnnouncementsReadmore),

]
