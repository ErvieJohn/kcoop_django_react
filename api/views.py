from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import *
from .serializers import *


from datetime import datetime
# Create your views here.


# FOR USER LOGIN
from django.contrib.auth import authenticate
from django.contrib.auth.models import Permission

import uuid

from django.contrib.auth.models import User, AnonymousUser
import traceback 

import os

import numpy as np

### FOR AUTH TOKEN
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


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
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["WhoWeAre_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
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
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["ProgramAndServices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
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
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["SatalliteOffices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
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
        Publications = TBL_Publications.objects.filter(Publications_name=data).order_by('-Publications_pubDate')
        serializers = TBL_PublicationsContentSerializer(Publications, many=True)
        #print(serializers.data)
        
        try:
            for i in range (len(serializers.data)): #convert date to shortend month
                if (serializers.data[i]["Publications_pubDate"]):
                    dateFormat = serializers.data[i]["Publications_pubDate"]
                    #print()
                    if(len(dateFormat)>4):
                        date = datetime.fromisoformat(dateFormat)
                        
                        dateConverted = date.strftime('%b-%d-%Y')
                        serializers.data[i]["Publications_pubDate"] = dateConverted
                    else:
                        serializers.data[i]["Publications_pubDate"] = dateFormat
                    
                else:
                    serializers.data[i]["Stories_date"] = ""
        except:
            traceback.print_exc()
                    
                
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Publications_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
@api_view(['POST', 'GET'])
def getTBL_PublicationsID(request):
    #print(request.query_params["id"])
    if request.data:
        data = request.data["Publications_id"]
        PublicationsID = TBL_Publications.objects.filter(Publications_id=data)
        serializers = TBL_PublicationsContentSerializer(PublicationsID, many=True)
        
        for i in range (len(serializers.data)): #convert date to shortend month
            if (serializers.data[i]["Publications_pubDate"]):
                dateFormat = serializers.data[i]["Publications_pubDate"]
                #print()
                if(len(dateFormat)>4):
                    date = datetime.fromisoformat(dateFormat)
                    
                    dateConverted = date.strftime('%b-%d-%Y')
                    serializers.data[i]["Publications_pubDate"] = dateConverted
                else:
                    serializers.data[i]["Publications_pubDate"] = dateFormat
                
            else:
                serializers.data[i]["Stories_date"] = ""
        
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
        #print(serializers.data)
        
        try:
            for i in range (len(serializers.data)): #convert date to shortend month
                if (serializers.data[i]["Stories_date"]):
                    dateFormat = serializers.data[i]["Stories_date"]
                    date = datetime.fromisoformat(dateFormat)
                    dateConverted = date.strftime('%b-%d-%Y')
                    serializers.data[i]["Stories_date"] = dateConverted
                    
                else:
                    serializers.data[i]["Stories_date"] = ""
        except:
            traceback.print_exc()
        
        
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
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["Careers_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

    
@api_view(['GET'])
def getHomeData(request):
    Home = TBL_Home.objects.all()
    serializers = TBL_HomeSerializer(Home, many=True)
    try:
        for i in range (len(serializers.data)): #convert date to shortend month
                if (serializers.data[i]["Home_date"]):
                    dateFormat = serializers.data[i]["Home_date"]
                    date = datetime.fromisoformat(dateFormat)
                    dateConverted = date.strftime('%b-%d-%Y')
                    serializers.data[i]["Home_date"] = dateConverted
                    
                else:
                    serializers.data[i]["Home_date"] = ""
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

##### FOR ADMIN
def createAuditTrail(activity, action, username, staff):
    gen_uuid = str(uuid.uuid4())
    #time = datetime.now().strftime("%H:%M")
    if(staff):
        staff = "Yes"
    else:
        staff = "No"
    auditTrail = TBL_AuditTrail.objects.create(AuditTrail_id=gen_uuid,AuditTrail_user=username,
                                                AuditTrail_activity=activity, AuditTrail_action=action,
                                                AuditTrail_staff=staff)



@api_view(['POST'])
def cmsLogout(request):
    username = request.data["username"]
    gen_uuid = str(uuid.uuid4())
    
    isSuperUser = User.objects.get(username=username)
    staff = isSuperUser.is_staff
    #datetimeNow = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    #time = datetime.now().strftime('%I:%M:%S %p')
    createAuditTrail("Logged out","Log Out",username,staff)
    
    return Response({"data":"User Logout"})

@api_view(['POST'])
def getCmsStaff(request):
    user = get_object_or_404(User, username=request.data['username'])
    serializer = UserSerializer(user)
    isSuperUser = serializer.data["is_staff"]
    return Response({"Staff":isSuperUser})

# Home
@api_view(['POST'])
def getHomeSlide(request):
    if request.data:
        data = request.data["Home_title"]
        Home = TBL_Home.objects.filter(Home_title=data)
        
        serializers = TBL_HomeSerializer(Home, many=True)
        
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Home_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        #print(serializers.data)
        return Response(serializers.data)

@api_view(['POST'])
def updateHomeSlide(request):
    if request.data:
        title = request.data["Home_title"]
        id = request.data["Home_id"]
        status = request.data["Home_status"]
        username = request.data["username"]
        staff = request.data["staff"]
        Home = TBL_Home.objects.filter(Home_id=id)
        Home.update(Home_status=status)
        
        try:
            HomeID = TBL_Home.objects.get(Home_id=id)
            serializersID = TBL_HomeSerializer(HomeID)
            imageName = os.path.basename(serializersID.data["Home_image"])
            #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        allHome = TBL_Home.objects.filter(Home_title=title)
        serializers = TBL_HomeSerializer(allHome, many=True)
        
        
        activity = "Changed " + imageName + " status to " + status  + " in Home"
        action = "Update"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Home_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)

@api_view(['POST'])
def uploadImage(request):
    print("request.data: ", request.data)
    try:
        image = request.data['image']
        username = request.data['username']
        staff = request.data["staff"]
        #print(request.data)
        #print(image)
    except KeyError:
        raise print('Request has no resource file attached')
    
    gen_uuid = str(uuid.uuid4())
    product = TBL_Home.objects.create(Home_id=gen_uuid,Home_title="Image Slider",Home_image=image, Home_status="Deactivated")
    
    
    activity  = "Uploaded image " + str(image) + " in Home"
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)
    
    title = "Image Slider"
    allHome = TBL_Home.objects.filter(Home_title=title)
    serializers = TBL_HomeSerializer(allHome, many=True)
    
    #print(WhoWeAre.update)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["Home_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

@api_view(['POST'])
def deleteImage(request):
    if request.data:
        id = request.data["Home_id"]
        title = request.data["Home_title"]
        
        HomeID = TBL_Home.objects.get(Home_id=id)
        serializersID = TBL_HomeSerializer(HomeID)
        imageName = os.path.basename(serializersID.data["Home_image"])
        
        Home = TBL_Home.objects.filter(Home_id=id, Home_title=title)
        
        Home.delete()
        
        allHome = TBL_Home.objects.filter(Home_title=title)
        serializers = TBL_HomeSerializer(allHome, many=True)
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted image " + imageName + " in Home"
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        #print(WhoWeAre.update)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Home_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
    
# History
@api_view(['POST'])
def updateWhoweare(request):
    if request.data:
        data = request.data["WhoWeAre_title"]
        textEdited = request.data["edited"]
        WhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_title=data)
        #person = {'name': 'ervie', 'age': 22}
        
        WhoWeAre.update(WhoWeAre_content=textEdited)
        serializers = WhoWeAreSerializer(WhoWeAre, many=True)
        #print(WhoWeAre.update)
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Edited " + data  + " in " + data
        action = "Update"
        createAuditTrail(activity, action, username, staff)
        
        return Response(serializers.data)
    
# WhoWeAre
@api_view(['POST'])
def updateWhoWeAreImage(request):
    if request.data:
        title = request.data["WhoWeAre_title"]
        id = request.data["WhoWeAre_id"]
        status = request.data["WhoWeAre_status"]
        WhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_id=id, WhoWeAre_title=title)
        WhoWeAre.update(WhoWeAre_status=status)
        
        allWhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_title=title)
        serializers = WhoWeAreSerializer(allWhoWeAre, many=True)
        #print(WhoWeAre.update)
        
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_WhoWeAre.objects.get(WhoWeAre_id=id, WhoWeAre_title=title)
            serializersID = WhoWeAreSerializer(findID)
            imageName = os.path.basename(serializersID.data["WhoWeAre_image"])
            #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        activity = "Changed " + imageName + " status to " + status + " in " + title
        action = "Update"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["WhoWeAre_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
@api_view(['POST'])
def uploadWhoWeAreImage(request):
    try:
        #print(request.data['image'])
        image = request.data['image']
        title = request.data['WhoWeAre_title']
        #print(request.data)
        #print(image)
    except KeyError:
        raise print('Request has no resource file attached')
    
    gen_uuid = str(uuid.uuid4())
    type_id = ""
    if(title=="V M G"):
        type_id = "d66ce613-bfd5-4ced-b103-58f64a95ad8c"
        
    elif (title=="KSO GUIDING PRINCIPLES"):
        type_id = "936d3595-712b-4fdc-8e74-1f63ba2f6d5d"
        
    elif (title=="ORGANIZATIONAL STRUCTURE"):
        type_id = "39fec954-d572-4539-a42d-3539d431f38a"    
        
    product = TBL_WhoWeAre.objects.create(WhoWeAre_id=gen_uuid,WhoWeAretype_id_id=type_id ,WhoWeAre_title=title,WhoWeAre_image=image)
    
    allWhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_title=title)
    serializers = WhoWeAreSerializer(allWhoWeAre, many=True)
    #print(WhoWeAre.update)
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Uploaded image " + str(image) + " in " + title
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["WhoWeAre_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    return Response(serializers.data)

@api_view(['POST'])
def deleteWhoWeAreImage(request):
    if request.data:
        id = request.data["WhoWeAre_id"]
        title = request.data["WhoWeAre_title"]
        
        findID = TBL_WhoWeAre.objects.get(WhoWeAre_id=id, WhoWeAre_title=title)
        serializersID = WhoWeAreSerializer(findID)
        
        imageName = os.path.basename(serializersID.data["WhoWeAre_image"])
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted image " + imageName + " in " + title
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        
        Home = TBL_WhoWeAre.objects.filter(WhoWeAre_id=id, WhoWeAre_title=title)
        Home.delete()
        
        allWhoWeAre = TBL_WhoWeAre.objects.filter(WhoWeAre_title=title)
        serializers = WhoWeAreSerializer(allWhoWeAre, many=True)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["WhoWeAre_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
            
        return Response(serializers.data)
    
# Program And Services
@api_view(['POST'])
def updatePnSImage(request):
    if request.data:
        title = request.data["ProgramAndServices_title"]
        id = request.data["ProgramAndServices_id"]
        status = request.data["ProgramAndServices_status"]
        ProgramAndServices = TBL_ProgramAndServices.objects.filter(ProgramAndServices_id=id, ProgramAndServices_title=title)
        ProgramAndServices.update(ProgramAndServices_status=status)
        
        allProgramAndServices = TBL_ProgramAndServices.objects.filter(ProgramAndServices_title=title)
        serializers = ProgramsAndServicesHSerializer(allProgramAndServices, many=True)
        #print(WhoWeAre.update)
        
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_ProgramAndServices.objects.get(ProgramAndServices_id=id, ProgramAndServices_title=title)
            serializersID = ProgramsAndServicesHSerializer(findID)
            imageName = os.path.basename(serializersID.data["ProgramAndServices_image"])
            activity = "Changed " + imageName + " status to " + status + " in " + title
            action = "Update"
            createAuditTrail(activity, action, username, staff)
            #print(os.path.basename(serializersID.data["Home_image"]))
            # adding image file name
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["ProgramAndServices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()

        return Response(serializers.data)
    
@api_view(['POST'])
def uploadPnSImage(request):
    try:
        #print(request.data['image'])
        image = request.data['image']
        title = request.data['ProgramAndServices_title']
        #print(request.data)
        #print(image)
    except KeyError:
        raise print('Request has no resource file attached')
    
    gen_uuid = str(uuid.uuid4())
    type_id = ""
    if(title=="Livelihood and Enterprise Development"):
        type_id = "eb853561-442c-4e9b-870c-80635602ddd2"
        
    elif (title=="Education, Training and Formation"):
        type_id = "f2291666-44a5-4bec-addd-f2aaa4a12d1e"
        
    elif (title=="Health and Wellness"):
        type_id = "3d663e2d-f967-469f-8f44-30358df9d792"  
        
    elif (title=="Security, Shelter and Safety"):
        type_id = "8901e64a-f996-4bbb-bc53-b1e3abf57f46"      
        
    elif (title=="Social Protection"):
        type_id = "c7f58107-368a-408d-9cd5-424e1685c1e3"   
    
    product = TBL_ProgramAndServices.objects.create(ProgramAndServices_id=gen_uuid,ProgramAndServicestype_id_id=type_id ,ProgramAndServices_title=title,ProgramAndServices_image=image)
    
    
    allProgramAndServices = TBL_ProgramAndServices.objects.filter(ProgramAndServices_title=title)
    serializers = ProgramsAndServicesHSerializer(allProgramAndServices, many=True)
    #print(serializers.data)
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Uploaded image " + str(image) + " in " + title
    action = "Create"
    #print(action)
    createAuditTrail(activity, action, username, staff)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["ProgramAndServices_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

@api_view(['POST'])
def deletePnSImage(request):
    if request.data:
        id = request.data["ProgramAndServices_id"]
        title = request.data["ProgramAndServices_title"]
        
        findID = TBL_ProgramAndServices.objects.get(ProgramAndServices_id=id)
        serializersID = ProgramsAndServicesHSerializer(findID)
        imageName = os.path.basename(serializersID.data["ProgramAndServices_image"])
        
        Home = TBL_ProgramAndServices.objects.filter(ProgramAndServices_id=id, ProgramAndServices_title=title)
        Home.delete()
        allProgramAndServices = TBL_ProgramAndServices.objects.filter(ProgramAndServices_title=title)
        serializers = ProgramsAndServicesHSerializer(allProgramAndServices, many=True)
        
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted image " + imageName + " in " + title
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["ProgramAndServices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
    
# Satallite Offices
@api_view(['POST'])
def updateSOImage(request):
    if request.data:
        region = request.data["SatalliteOffices_region"]
        id = request.data["SatalliteOffices_id"]
        status = request.data["SatalliteOffices_status"]
        SatalliteOffices = TBL_SatalliteOffices.objects.filter(SatalliteOffices_id=id, SatalliteOffices_region=region)
        SatalliteOffices.update(SatalliteOffices_status=status)
        
        allSatalliteOffices = TBL_SatalliteOffices.objects.filter(SatalliteOffices_region=region)
        serializers = TBL_SatalliteOfficesContentSerializer(allSatalliteOffices, many=True)
        #print(WhoWeAre.update)
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_SatalliteOffices.objects.get(SatalliteOffices_id=id, SatalliteOffices_region=region)
            serializersID = TBL_SatalliteOfficesContentSerializer(findID)
            imageName = os.path.basename(serializersID.data["SatalliteOffices_image"])
            activity = "Changed " + imageName + " status to " + status + " in " + serializersID.data["SatalliteOffices_city"] + " in " +region
            action = "Update"
            createAuditTrail(activity, action, username, staff)
            #print(os.path.basename(serializersID.data["Home_image"]))
            # adding image file name
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["SatalliteOffices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
@api_view(['POST'])
def uploadSOImage(request):
    try:
        #print(request.data['image'])
        image = request.data['image']
        region = request.data['SatalliteOffices_region']
        city = request.data['SatalliteOffices_city']
        #print(request.data)
        #print(image)
    except KeyError:
        raise print('Request has no resource file attached')
    
    gen_uuid = str(uuid.uuid4())
    type_id = ""
    if(region=="National Capital Region"):
        type_id = "667239f5-afae-4a89-a82a-c5d5f68ed260"
        
    elif (region=="Region III"):
        type_id = "4e1bcaf2-6cb7-459b-bf28-f7b89690b962"
        
    elif (region=="Region IV - A"):
        type_id = "cbfecaa6-0223-4890-8e25-82dbf4419710"   
    
    product = TBL_SatalliteOffices.objects.create(SatalliteOffices_id=gen_uuid,SatalliteOfficestype_id_id=type_id ,SatalliteOffices_region=region,SatalliteOffices_city=city,SatalliteOffices_image=image)
    
    
    allSatalliteOffices = TBL_SatalliteOffices.objects.filter(SatalliteOffices_region=region)
    serializers = TBL_SatalliteOfficesContentSerializer(allSatalliteOffices, many=True)
    #print(serializers.data)
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Uploaded image " + str(image) + " in " + city + " in " + region
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["SatalliteOffices_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

@api_view(['POST'])
def deleteSOImage(request):
    if request.data:
        id = request.data["SatalliteOffices_id"]
        region = request.data["SatalliteOffices_region"]
        
        findID = TBL_SatalliteOffices.objects.get(SatalliteOffices_id=id)
        serializersID = TBL_SatalliteOfficesContentSerializer(findID)
        imageName = os.path.basename(serializersID.data["SatalliteOffices_image"])
        
        Home = TBL_SatalliteOffices.objects.filter(SatalliteOffices_id=id, SatalliteOffices_region=region)
        Home.delete()
        
        allSatalliteOffices = TBL_SatalliteOffices.objects.filter(SatalliteOffices_region=region)
        serializers = TBL_SatalliteOfficesContentSerializer(allSatalliteOffices, many=True)
        #print(WhoWeAre.update)
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted image " + imageName + " in " + serializersID.data["SatalliteOffices_city"] + " in " + region
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["SatalliteOffices_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
# Publications
@api_view(['POST'])
def updatePubContent(request):
    if request.data:
        title = request.data["Publications_name"]
        id = request.data["Publications_id"]
        
        if(title == "Announcements"):
            date = request.data["Publications_pubDate"]
            titleA = request.data["Publications_title"]
            content = request.data["Publications_content"]
            image = request.data["Publications_image"]
            #print(image)
            Publications = TBL_Publications.objects.get(Publications_id=id, Publications_name=title)
            Publications.Publications_pubDate = date
            Publications.Publications_title=titleA
            Publications.Publications_content=content
            strImage = str(Publications.Publications_image)
            newStrImage = str(image)
            #print("strImage", strImage)
            #print("newStrImage", newStrImage)
            if (newStrImage[:13] == "/static/media"):
                Publications.Publications_image=newStrImage[14:]
                
            elif(strImage != newStrImage):
                Publications.Publications_image=image
                
            findID = TBL_Publications.objects.get(Publications_id=id, Publications_name=title)
            serializersID = TBL_PublicationsContentSerializer(findID)
            imageName = serializersID.data["Publications_title"]
            activity = "Updated the " + imageName + " in " + title
                
            Publications.save()
            
        elif(title=="updateStatus"):
            title = "Announcements"
            status = request.data["Publications_status"]
            Publications = TBL_Publications.objects.filter(Publications_id=id, Publications_name=title)
            Publications.update(Publications_status=status)
            
            findID = TBL_Publications.objects.get(Publications_id=id, Publications_name=title)
            serializersID = TBL_PublicationsContentSerializer(findID)
            imageName = serializersID.data["Publications_title"]
            activity = "Changed " + imageName + " status to " + status + " in " + title
            
        else:
            status = request.data["Publications_status"]
            Publications = TBL_Publications.objects.filter(Publications_id=id, Publications_name=title)
            Publications.update(Publications_status=status)
            
            findID = TBL_Publications.objects.get(Publications_id=id, Publications_name=title)
            serializersID = TBL_PublicationsContentSerializer(findID)
            imageName = os.path.basename(serializersID.data["Publications_image"])
            activity = "Changed " + imageName + " status to " + status + " in " + title
        
        allPublications = TBL_Publications.objects.filter(Publications_name=title)
        serializers = TBL_PublicationsContentSerializer(allPublications, many=True)
        
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            action = "Update"
            createAuditTrail(activity, action, username, staff)
            #print(os.path.basename(serializersID.data["Home_image"]))
            # adding image file name
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Publications_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
            
        #print(WhoWeAre.update)
        return Response(serializers.data)

@api_view(['POST'])
def uploadPubContent(request):
    try:
        #print(request.data['image'])
        
        image = request.data['image']
        title = request.data['Publications_name']
        
        now = datetime.now()
        year = now.strftime("%Y")
        dateStr = now.strftime("%Y-%m-%d")
        #print(dateStr)
        gen_uuid = str(uuid.uuid4())
        
        type_id = ""
        if(title=="Announcements"):
            content = request.data['Publications_content']
            date = request.data['Publications_pubDate']
            ann_title = request.data['Publications_title']
            
            
            type_id = "2a9651b2-a0d0-49ef-bbce-3bcf1e64695c"
            product = TBL_Publications.objects.create(Publications_id=gen_uuid,Publicationstype_id_id=type_id,Publications_name=title,Publications_image=image, Publications_pubDate=date,Publications_content=content, Publications_title=ann_title)
            
        elif (title=="Audited Financial Statements"):
            file = request.data['file']
            type_id = "9729fb77-51d4-4d12-9d67-bcfbae36dbaa"
            product = TBL_Publications.objects.create(Publications_id=gen_uuid,Publicationstype_id_id=type_id,Publications_title=year,Publications_name=title,Publications_image=image,Publications_file=file, Publications_pubDate=dateStr)
            
        elif (title=="Annual Reports"):
            file = request.data['file']
            type_id = "d727cfa2-b991-423c-8adb-ae226c472313"   
            
            product = TBL_Publications.objects.create(Publications_id=gen_uuid,Publicationstype_id_id=type_id,Publications_name=title,Publications_image=image,Publications_file=file, Publications_pubDate=dateStr)
            #print("README 2")
        elif (title=="By The Numbers"):
            type_id = "eac803f0-29d5-4761-9310-c3396c1d4607"  
            product = TBL_Publications.objects.create(Publications_id=gen_uuid,Publicationstype_id_id=type_id,Publications_name=title,Publications_image=image, Publications_pubDate=dateStr)
            #print(file)

    except KeyError:
        raise print('Request has no resource file attached')

    #print(type_id) 
    allPublications = TBL_Publications.objects.filter(Publications_name=title)
    serializers = TBL_PublicationsContentSerializer(allPublications, many=True)
    #print(serializers.data)
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Uploaded publications " + str(image) + " in " + title
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["Publications_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

@api_view(['POST'])
def deletePubContent(request):
    if request.data:
        id = request.data["Publications_id"]
        title = request.data["Publications_name"]
        
        findID = TBL_Publications.objects.get(Publications_id=id)
        serializersID = TBL_PublicationsContentSerializer(findID)
        if (title=="Announcements"):
            imageName = os.path.basename(serializersID.data["Publications_name"])
        else:
            imageName = os.path.basename(serializersID.data["Publications_image"])
        
        Publications = TBL_Publications.objects.filter(Publications_id=id, Publications_name=title)
        Publications.delete()
        
        allPublications = TBL_Publications.objects.filter(Publications_name=title)
        serializers = TBL_PublicationsContentSerializer(allPublications, many=True)
        #print(WhoWeAre.update)
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted publications " + imageName + " in " + title
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Publications_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
    
# Stories
@api_view(['POST'])
def updateStoriesStatus(request):
    if request.data:
        title = request.data["Stories_name"]
        id = request.data["Stories_id"]
        status = request.data["Stories_status"]
        #print(title, id, status)
        Stories = TBL_Stories.objects.filter(Stories_id=id, Stories_name=title)
        Stories.update(Stories_status=status)
        
        allStories = TBL_Stories.objects.filter(Stories_name=title)
        serializers = TBL_StoriesContentSerializer(allStories, many=True)
        #print(WhoWeAre.update)
        
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_Stories.objects.get(Stories_id=id, Stories_name=title)
            serializersID = TBL_StoriesContentSerializer(findID)
            imageName = serializersID.data["Stories_title"]
            activity = "Changed " + imageName + " status to " + status + " in " + title
            action = "Update"
            createAuditTrail(activity, action, username, staff)

        except:
            traceback.print_exc()

        
        return Response(serializers.data)

@api_view(['POST'])
def updateStoriesContent(request):
    if request.data:
        title = request.data["Stories_name"]
        id = request.data["Stories_id"]
        
        if(title == "Videos"):
            status = request.data["Stories_status"]
            Stories = TBL_Stories.objects.filter(Stories_id=id, Stories_name=title)
            Stories.update(Stories_status=status)
            
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_Stories.objects.get(Stories_id=id, Stories_name=title)
            serializersID = TBL_StoriesContentSerializer(findID)
            imageName = serializersID.data["Stories_title"]
            activity = "Changed " + imageName + " status to " + status + " in " + title
            action = "Update"
            createAuditTrail(activity, action, username,staff)
            
        else:
            date = request.data["Stories_date"]
            titleA = request.data["Stories_title"]
            content = request.data["Stories_content"]
            image = request.data["Stories_image"]
            print("Error?", id, title)
            Stories = TBL_Stories.objects.get(Stories_id=id, Stories_name=title)
           
            Stories.Stories_date = date
            Stories.Stories_title=titleA
            Stories.Stories_content=content
            strImage = str(Stories.Stories_image)
            newStrImage = str(image)
            #print("strImage", strImage)
            #print("newStrImage", newStrImage)
            if (newStrImage[:13] == "/static/media"):
                
                Stories.Stories_image=newStrImage[14:]
                
            elif(strImage != newStrImage):
                Stories.Stories_image=image
            
            
            Stories.save()
            
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_Stories.objects.get(Stories_id=id, Stories_name=title)
            serializersID = TBL_StoriesContentSerializer(findID)
            imageName = serializersID.data["Stories_title"]
            activity = "Updated the " + imageName + " in " + title
            action = "Update"
            createAuditTrail(activity, action, username, staff)
        
        allStories = TBL_Stories.objects.filter(Stories_name=title)
        serializers = TBL_StoriesContentSerializer(allStories, many=True)
        #print(WhoWeAre.update)
        return Response(serializers.data)

@api_view(['POST'])
def deleteStoriesContent(request):
    if request.data:
        id = request.data["Stories_id"]
        title = request.data["Stories_name"]
        
        findID = TBL_Stories.objects.get(Stories_id=id, Stories_name=title)
        serializersID = TBL_StoriesContentSerializer(findID)
        
        Stories = TBL_Stories.objects.filter(Stories_id=id, Stories_name=title)
        Stories.delete()
        
        allStories = TBL_Stories.objects.filter(Stories_name=title)
        serializers = TBL_StoriesContentSerializer(allStories, many=True)
        #print(WhoWeAre.update)
        
        username = request.data["username"]
        staff = request.data["staff"]
        imageName = serializersID.data["Stories_title"]
        activity = "Deleted the " + imageName + " in " + title
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        return Response(serializers.data)


@api_view(['POST'])
def uploadStoriesContent(request):
    try:
        title = request.data['Stories_name']
        
        now = datetime.now()
        year = now.strftime("%Y")
        dateStr = now.strftime("%Y-%m-%d")
        #print(dateStr)
        gen_uuid = str(uuid.uuid4())
        
        type_id = ""
        if(title == "Videos"):
            type_id = "f63060e2-313d-4fb6-9724-9f97080177cd"
            #print(type_id)
            yt_url = request.data['Stories_ytlink']
            date = request.data['Stories_date']
            ann_title = request.data['Stories_title']
            
            product = TBL_Stories.objects.create(Stories_id=gen_uuid,Storiestype_id_id=type_id,Stories_name=title, Stories_date=date,Stories_ytlink=yt_url, Stories_title=ann_title)
            
        else:
            if(title=="K - Ganapan"):
                type_id = "27f71549-1e4b-4e5e-9559-f3ab7ea16411"
               
            elif(title=="Kwentong - K"):
                type_id = "7ae4dd6f-b45f-49cd-8127-6d629daa030b"
                
            elif(title=="K - Bahagi"):
                type_id = "9c0ddab3-52a8-4a65-b7ad-ac9f21f0191b"
            #print(type_id)
            image = request.data['image']
            content = request.data['Stories_content']
            date = request.data['Stories_date']
            ann_title = request.data['Stories_title']
            #print(ann_title)
            product = TBL_Stories.objects.create(Stories_id=gen_uuid,Storiestype_id_id=type_id,Stories_name=title,Stories_image=image, Stories_date=date,Stories_content=content, Stories_title=ann_title)

    except KeyError:
        raise print('Request has no resource file attached')
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Added Story " + ann_title + " in " + title
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)

    #print(type_id) 
    allStories = TBL_Stories.objects.filter(Stories_name=title)
    serializers = TBL_StoriesContentSerializer(allStories, many=True)
    #print(serializers.data)
    return Response(serializers.data)

# Careers 
@api_view(['POST'])
def updateCareersImage(request):
    if request.data:
        #print(request.data)
        id = request.data["Careers_id"]
        status = request.data["Careers_status"]
        Careers = TBL_Careers.objects.filter(Careers_id=id)
        Careers.update(Careers_status=status)
        
        allCareers = TBL_Careers.objects.all()
        serializers = TBL_CareersSerializer(allCareers, many=True)
        #print(WhoWeAre.update)
        
        try:
            username = request.data["username"]
            staff = request.data["staff"]
            findID = TBL_Careers.objects.get(Careers_id=id)
            serializersID = TBL_CareersSerializer(findID)
            imageName = os.path.basename(serializersID.data["Careers_image"])
            #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        activity = "Changed " + imageName + " status to " + status + " in Careers"
        action = "Update"
        createAuditTrail(activity, action, username, staff)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Careers_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)

@api_view(['POST'])
def uploadCareersImage(request):
    try:
        image = request.data['image']
        
    except KeyError:
        raise print('Request has no resource file attached')
    
    gen_uuid = str(uuid.uuid4())
    product = TBL_Careers.objects.create(Careers_id=gen_uuid,Careers_image=image)
    
    allCareers = TBL_Careers.objects.all()
    serializers = TBL_CareersSerializer(allCareers, many=True)
    #print(WhoWeAre.update)
    
    username = request.data['username']
    staff = request.data["staff"]
    activity = "Uploaded image " + str(image) + " in Careers"
    #print(action)
    action = "Create"
    createAuditTrail(activity, action, username, staff)
    
    # adding image file name
    try:
        for i in range(len(serializers.data)):
            imageName = os.path.basename(serializers.data[i]["Careers_image"])
            serializers.data[i]["file_name"] = imageName
            #print(os.path.basename(serializersID.data["Home_image"]))
    except:
        traceback.print_exc()
    
    return Response(serializers.data)

@api_view(['POST'])
def deleteCareersImage(request):
    if request.data:
        id = request.data["Careers_id"]
        
        findID = TBL_Careers.objects.get(Careers_id=id)
        serializersID = TBL_CareersSerializer(findID)
        
        imageName = os.path.basename(serializersID.data["Careers_image"])
        
        username = request.data['username']
        staff = request.data["staff"]
        activity = "Deleted image " + imageName + " in Careers"
        action = "Delete"
        createAuditTrail(activity, action, username, staff)
        
        Careers = TBL_Careers.objects.filter(Careers_id=id)
        Careers.delete()
        
        allCareers = TBL_Careers.objects.all()
        serializers = TBL_CareersSerializer(allCareers, many=True)
        #print(WhoWeAre.update)
        
        # adding image file name
        try:
            for i in range(len(serializers.data)):
                imageName = os.path.basename(serializers.data[i]["Careers_image"])
                serializers.data[i]["file_name"] = imageName
                #print(os.path.basename(serializersID.data["Home_image"]))
        except:
            traceback.print_exc()
        
        return Response(serializers.data)
    
@api_view(['POST'])
def getAuditTrail(request):
    try:
        username = request.data['username']
        staff = request.data['staff']
        
        action = request.data['action']
        date = request.data['date']
        time = request.data['time']
        
        toDate = request.data['toDate']
        toTime = request.data['toTime']
        
        # print(username, staff, action, date, time, toDate, toTime)
        #print(username, type(staff))
        if staff: #if user is super user search is enabled
            usernameInput = request.data['usernameInput']   
            AuditTrail = TBL_AuditTrail.objects.all().order_by('-AuditTrail_date', '-AuditTrail_time')
            #print(AuditTrail)
            dateNow = datetime.today().strftime("%y-%m-%d")
            
            if(usernameInput):
                AuditTrail = AuditTrail.filter(AuditTrail_user=usernameInput)
                    
            if(action):
                if action != "All":
                    AuditTrail = AuditTrail.filter(AuditTrail_action=action) 
                
            if(date and toDate):
                AuditTrail = AuditTrail.filter(AuditTrail_date__range=[date,toDate]) 
                
            elif(date and toDate is None):
                AuditTrail = AuditTrail.filter(AuditTrail_date__gte=date) 
                
            elif(date is None and toDate):
                AuditTrail = AuditTrail.filter(AuditTrail_date__lte=toDate) 
             ###############   
            if(time and toTime):
                AuditTrail = AuditTrail.filter(AuditTrail_time__range=[time+":00",toTime+":00"])
                
            elif(time and toTime is None):
                AuditTrail = AuditTrail.filter(AuditTrail_time__gte=time+":00")
                
            elif(time is None and toTime):
                AuditTrail = AuditTrail.filter(AuditTrail_time__lte=toTime+":00")
            
            serializers = TBL_AuditTrailSerializer(AuditTrail, many=True)
            
        else:
            AuditTrail = TBL_AuditTrail.objects.filter(AuditTrail_user=username).order_by('-AuditTrail_date', '-AuditTrail_time')
            
            if(action):
                if action != "All":
                    AuditTrail = AuditTrail.filter(AuditTrail_action=action) 
                
            if(date and toDate):
                AuditTrail = AuditTrail.filter(AuditTrail_date__range=[date,toDate]) 
                
            elif(date and toDate is None):
                AuditTrail = AuditTrail.filter(AuditTrail_date__gte=date) 
                
            elif(date is None and toDate):
                AuditTrail = AuditTrail.filter(AuditTrail_date__lte=toDate) 
             ###############   
            if(time and toTime):
                AuditTrail = AuditTrail.filter(AuditTrail_time__range=[time+":00",toTime+":00"])
                
            elif(time and toTime is None):
                AuditTrail = AuditTrail.filter(AuditTrail_time__gte=time+":00")
                
            elif(time is None and toTime):
                AuditTrail = AuditTrail.filter(AuditTrail_time__lte=toTime+":00")
            
                
            serializers = TBL_AuditTrailSerializer(AuditTrail, many=True)
        
        #if(time): #for time, if the time is inputed
            # x = []
            # for i in range(len(serializers.data)):
            #     t_str = str(serializers.data[i]["AuditTrail_time"])
            #     t_str = t_str[0:5]
            #     if(t_str!=time):
            #         #print("t_str", t_str, "time", time)
            #         pass
            #     else:
            #         x.append(serializers.data[i])

            # for i in range(len(x)):
            #     t_str = str(x[i]["AuditTrail_time"])
            #     t_str = t_str[0:8]
            #     t_obj = datetime.strptime(t_str, '%H:%M:%S')
            #     t_am_pm = t_obj.strftime('%I:%M:%S %p')
                
            #     x[i]["AuditTrail_datetime"] = str(x[i]["AuditTrail_date"]) + " " + t_am_pm
            
            # return Response(x)
            
            # AuditTrail = AuditTrail.filter(AuditTrail_time__range=[time,"5:00"])
            
            # for i in range(len(serializers.data)):
            #     t_str = str(serializers.data[i]["AuditTrail_time"])
            #     t_str = t_str[0:8]
            #     t_obj = datetime.strptime(t_str, '%H:%M:%S')
            #     t_am_pm = t_obj.strftime('%I:%M:%S %p')
                
            #     serializers.data[i]["AuditTrail_datetime"] = str(serializers.data[i]["AuditTrail_date"]) + " " + t_am_pm
            
            
            # return Response(serializers.data)
        
        #else:
        for i in range(len(serializers.data)):
            t_str = str(serializers.data[i]["AuditTrail_time"])
            t_str = t_str[0:8]
            t_obj = datetime.strptime(t_str, '%H:%M:%S')
            #print(str(t_obj))
            t_am_pm = t_obj.strftime('%I:%M:%S %p')
            
            serializers.data[i]["AuditTrail_datetime"] = str(serializers.data[i]["AuditTrail_date"]) + " " + t_am_pm
        
        #print(serializers.data)
        return Response(serializers.data)

    except KeyError:
        traceback.print_exc()
        
    