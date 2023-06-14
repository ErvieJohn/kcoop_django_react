from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import Announcements
from .serializers import AnnouncementsSerializer
# Create your views here.


@api_view(['GET'])
def getAnnouncementsData(request):
    announcements = Announcements.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = AnnouncementsSerializer(announcements, many=True)
    return Response(serializers.data)

@api_view(['POST', 'GET'])
def getAnnouncementsReadmore(request):
        if request.data:
            data = int(request.data["id"])
            announcement = Announcements.objects.get(announcements_id=data)
            serializer = AnnouncementsSerializer(announcement)
            #return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
 
            #students = Student.objects.all()
            #serializer = StudentSerializer(students, many=True)
            return Response(serializer.data)
