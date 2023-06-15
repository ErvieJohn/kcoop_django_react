from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import *
from .serializers import *
# Create your views here.

#for WHO WE ARE HEADER
@api_view(['GET'])
def getWhoWeAreType(request):
    WhoWeAreType = TBL_WhoWeAreType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = WhoWeAreTypeSerializer(WhoWeAreType, many=True)
    return Response(serializers.data)

#for Programs And Services
@api_view(['GET'])
def getProgramsAndServicesType(request):
    ProgramsAndServicesType = TBL_ProgramAndServicesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = ProgramsAndServicesSerializer(ProgramsAndServicesType, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def getAnnouncementsData(request):
    announcements = Announcements.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = AnnouncementsSerializer(announcements, many=True)
    return Response(serializers.data)

@api_view(['POST'])
def getAnnouncementsReadmore(request):
        if request.data:
            data = int(request.data["id"])
            print(data)
            announcement = Announcements.objects.get(announcements_id=data)
            serializer = AnnouncementsSerializer(announcement)
            #return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
 
            #students = Student.objects.all()
            #serializer = StudentSerializer(students, many=True)
            return Response(serializer.data)
