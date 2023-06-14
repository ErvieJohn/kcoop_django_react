from django.urls import path
from . import views

urlpatterns = [
    path('getAnnouncementsData/',views.getAnnouncementsData),
    path('getAnnouncementData/',views.getAnnouncementsReadmore),
    
]
