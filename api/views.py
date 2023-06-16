from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import *
from .serializers import *
# Create your views here.

# for HEADER
@api_view(['GET'])
def getTBL_Header(request):
    Header = TBL_Header.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = HeaderSerializer(Header, many=True)
    return Response(serializers.data)


#for WHO WE ARE HEADER
@api_view(['GET'])
def getWhoWeAreType(request):
    WhoWeAreType = TBL_WhoWeAreType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = WhoWeAreTypeSerializer(WhoWeAreType, many=True)
    return Response(serializers.data)

# for Who We Are
@api_view(['POST'])
def getWhoWeAre(request):
    if request.data:
        data = request.data["WhoWeAre_title"]
        WhoWeAre = TBL_WhoWeAre.objects.get(WhoWeAre_title=data)
        #person = {'name': 'ervie', 'age': 22}
        serializers = WhoWeAreSerializer(WhoWeAre)
        return Response(serializers.data)

#for Programs And Services Header
@api_view(['GET'])
def getProgramsAndServicesType(request):
    ProgramsAndServicesType = TBL_ProgramAndServicesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = ProgramsAndServicesSerializer(ProgramsAndServicesType, many=True)
    return Response(serializers.data)

# PROGRAMS AND SERVICES
@api_view(['POST'])
def getProgramsAndServices(request):
    if request.data:
        data = request.data["ProgramAndServices_title"]
        ProgramsAndServices = TBL_ProgramAndServices.objects.get(ProgramAndServices_title=data)
        #person = {'name': 'ervie', 'age': 22}
        serializers = ProgramsAndServicesHSerializer(ProgramsAndServices)
        return Response(serializers.data)
    
#for Programs And Services LOGO
@api_view(['GET'])
def getProgramsAndServicesLOGO(request):
    ProgramsAndServicesLogo = TBL_ProgramAndServicesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = ProgramsAndServicesLogoSerializer(ProgramsAndServicesLogo, many=True)
    return Response(serializers.data)

#for Programs And Services LOGO
@api_view(['POST'])
def getProgramsAndServicesTitleLOGO(request):
    if request.data:
        data = request.data["Header_name"]
        HeaderLogo = TBL_Header.objects.get(Header_name=data)
        #person = {'name': 'ervie', 'age': 22}
        serializers = HeaderLogoSerializer(HeaderLogo)
        return Response(serializers.data)


#for Satallite Offices Header
@api_view(['GET'])
def getTBL_SatalliteOfficesType(request):
    SatalliteOfficesType = TBL_SatalliteOfficesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = TBL_SatalliteOfficesSerializer(SatalliteOfficesType, many=True)
    return Response(serializers.data)

#for Publications Header
@api_view(['GET'])
def getTBL_PublicationsType(request):
    PublicationsType = TBL_PublicationsType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = TBL_PublicationsSerializer(PublicationsType, many=True)
    return Response(serializers.data)

#for Stories Header
@api_view(['GET'])
def getTBL_StoriesType(request):
    StoriesType = TBL_StoriesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = TBL_StoriesSerializer(StoriesType, many=True)
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
