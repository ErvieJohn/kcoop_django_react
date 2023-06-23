from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import *
from .serializers import *


from datetime import datetime
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
        WhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_title=data)
        #person = {'name': 'ervie', 'age': 22}
        serializers = WhoWeAreSerializer(WhoWeAre, many=True)
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
        ProgramsAndServices = TBL_ProgramAndServices.objects.filter(ProgramAndServices_title=data)
        #person = {'name': 'ervie', 'age': 22}
        serializers = ProgramsAndServicesHSerializer(ProgramsAndServices, many=True)
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

#for Satallite Offices Contents
@api_view(['POST'])
def getTBL_SatalliteOffices(request):
    if request.data:
        dataRegion = request.data["SatalliteOffices_region"]
        SatalliteOffices = TBL_SatalliteOffices.objects.filter(SatalliteOffices_region=dataRegion)
        #person = {'name': 'ervie', 'age': 22}
        serializers = TBL_SatalliteOfficesContentSerializer(SatalliteOffices, many=True)
        return Response(serializers.data)

#for Publications Header
@api_view(['GET'])
def getTBL_PublicationsType(request):
    PublicationsType = TBL_PublicationsType.objects.all()
    serializers = TBL_PublicationsSerializer(PublicationsType, many=True)
    return Response(serializers.data)

#for Publications Contents
@api_view(['POST'])
def getTBL_Publications(request):
    if request.data:
        data = request.data["Publications_name"]
        Publications = TBL_Publications.objects.filter(Publications_name=data)
        serializers = TBL_PublicationsContentSerializer(Publications, many=True)
        return Response(serializers.data)
    
@api_view(['POST', 'GET'])
def getTBL_PublicationsID(request):
    #print(request.query_params["id"])
    if request.data:
        data = request.data["Publications_id"]
        PublicationsID = TBL_Publications.objects.filter(Publications_id=data)
        serializers = TBL_PublicationsContentSerializer(PublicationsID, many=True)
        return Response(serializers.data)
    
    elif request.query_params:
        id = request.query_params["id"]
        PublicationsID = TBL_Publications.objects.filter(Publications_id=id)
        serializers = TBL_PublicationsContentSerializer(PublicationsID, many=True)
        return Response(serializers.data)
       

#for Stories Header
@api_view(['GET'])
def getTBL_StoriesType(request):
    StoriesType = TBL_StoriesType.objects.all()
    #person = {'name': 'ervie', 'age': 22}
    serializers = TBL_StoriesSerializer(StoriesType, many=True)
    return Response(serializers.data)

#for STORIES Contents
@api_view(['POST'])
def getTBL_Stories(request):
    if request.data:
        data = request.data["Stories_name"]
        Stories = TBL_Stories.objects.filter(Stories_name=data).order_by('-Stories_date')
        serializers = TBL_StoriesContentSerializer(Stories, many=True)
        #datetime_str = serializers.data[0]["Stories_date"]
        #print(serializers.data[0]["Stories_date"])
        for i in range (len(serializers.data)): #convert date to shortend month
            if (serializers.data[i]["Stories_date"]):
                dateFormat = serializers.data[i]["Stories_date"]
                date = datetime.fromisoformat(dateFormat)
                dateConverted = date.strftime('%b-%d-%Y')
                serializers.data[i]["Stories_date"] = dateConverted
                
            else:
                serializers.data[i]["Stories_date"] = ""
        
        
        return Response(serializers.data)
    
#for STORIES Contents
@api_view(['POST'])
def getTBL_StoriesID(request):
    if request.data:
        data = request.data["Stories_id"]
        Stories = TBL_Stories.objects.filter(Stories_id=data)
        serializers = TBL_StoriesContentSerializer(Stories, many=True)
        
        for i in range (len(serializers.data)): #convert date to shortend month
            dateFormat = serializers.data[i]["Stories_date"]
            date = datetime.fromisoformat(dateFormat)
            dateConverted = date.strftime('%b-%d-%Y')
            serializers.data[i]["Stories_date"] = dateConverted
        
        return Response(serializers.data)
    
@api_view(['GET'])
def getCareersData(request):
    careers = TBL_Careers.objects.all()
    
    serializers = TBL_CareersSerializer(careers, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def getAnnouncementsData(request):
    announcements = Announcements.objects.all()
  
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
