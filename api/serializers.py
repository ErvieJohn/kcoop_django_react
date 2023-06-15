from rest_framework import serializers
from .models import *

class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'

class WhoWeAreTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_WhoWeAreType
        fields = ('WhoWeAretype_name', 'WhoWeAretype_url')

class ProgramsAndServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_ProgramAndServicesType
        fields = ('ProgramAndServicestype_name', 'ProgramAndServicestype_url')
