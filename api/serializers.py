from rest_framework import serializers
from .models import Announcements

class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'