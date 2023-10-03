from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

import traceback 

from django.contrib.auth import authenticate
from django.http import HttpResponse
from django.contrib.auth.models import User


from rest_framework_simplejwt.views import TokenObtainPairView
from .member_serializer import MyTokenObtainPairSerializer, memberMyTokenObtainPairSerializer

from rest_framework.exceptions import APIException

from datetime import datetime
from dateutil import tz

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class memberMyTokenObtainPairView(TokenObtainPairView):
    serializer_class = memberMyTokenObtainPairSerializer
    

class HttpResponseNoContent(HttpResponse):
    status_code = 204
    
class UpdateErrorException(APIException):
    status_code = 409
    default_detail = ""
        #default_detail = "Email already exist."
    

@api_view(['POST']) #@permission_classes([IsAuthenticated])
def updateMember(request):
    if request.data:
        email = request.data["email"]
        username = request.data["username"]
        password = request.data["password"]
        firstName = request.data["firstName"]
        lastName = request.data["lastName"]
        newPassword = request.data["newPassword"]
        
        # print("email: ", email)
        # print("username: ", username)
        # print("password: ", password)
        # print("firstName: ", firstName)
        # print("lastName: ", lastName)
        # print("newPassword: ", newPassword)
        
        isEmailExist = User.objects.filter(email=email).exists() # checking if the email exist
        if(not isEmailExist):
            data, Error = memberUpdater(username=username, password=password, firstName=firstName, lastName=lastName, email=email, newPassword=newPassword)     
        else:
            isUserEmailExist = User.objects.filter(username=username, email=email).exists()
            if(isUserEmailExist):
                data, Error = memberUpdater(username=username, password=password, firstName=firstName, lastName=lastName, email=email, newPassword=newPassword)
            
            else:
                data, Error = "Email already exist!"
                
                
        if Error:
            raise UpdateErrorException(data)
            
        else:
            return Response({"detail":data})
            #return HttpResponseNoContent()
    
def memberUpdater(username, password, firstName, lastName, email, newPassword):
    user = authenticate(username=username, password=password)
    
    if user is not None:
        saveUser = User.objects.get(username=username)
        #print(checkUser.first_name)
        
        if password != newPassword:
            u = User.objects.get(username=username)
            u.first_name = firstName
            u.last_name = lastName
            u.email = email
            
            if len(newPassword) > 0:
                
                u.set_password(newPassword)
                u.save()
                data = "Your details has been updated!"
                Error = False
                
            else:
                if(saveUser.first_name != firstName or saveUser.last_name != lastName or 
                        saveUser.email != email):
                    u.save()
                    data = "Your details has been updated!"
                    Error = False
                    
                else:
                    data = "Nothing changes to your details!"
                    Error = True
            
        else:
            data = "Your new password is same to your last password."
            Error = True
    else:
        data = "Incorrect current password!"
        Error = True
        
    return data, Error

@api_view(['GET']) 
@permission_classes([IsAuthenticated])
def getMembers(request):
    members = User.objects.filter(groups__name='Members')
    
    membersData = []
    for member in members:
        try:
            dateAndTime = str(member.date_joined) # convert time to string
            dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
            dateAndTime = dateAndTime[:19] # get only date and time
            
            dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
            dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
            
            dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
            dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
            
        except:
            traceback.print_exc()
        membersData.append({"Username":member.username, "FirstName":member.first_name, "LastName":member.last_name,
                            "Email":member.email, "DateJoined": dateAndTime }) #member.date_joined})
    
    return Response({"data":membersData})


@api_view(['POST']) 
@permission_classes([IsAuthenticated])
def searchMembers(request):
    searchBy = request.data["searchby"]
    inputSearch = request.data["inputsearch"]
    
    if(searchBy=="Firstname"):
        members = User.objects.filter(first_name__contains=inputSearch, groups__name='Members')
        
    elif(searchBy=="Lastname"):
        members = User.objects.filter(last_name__contains=inputSearch, groups__name='Members')
        
    elif(searchBy=="Email"):
        members = User.objects.filter(email__contains=inputSearch, groups__name='Members')
    
    else:
        members = User.objects.filter(username__contains=inputSearch, groups__name='Members')
        
    membersData = []
    for member in members:
        try:
            dateAndTime = str(member.date_joined) # convert time to string
            dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
            dateAndTime = dateAndTime[:19] # get only date and time
            
            dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
            dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
            
            dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
            dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
            
        except:
            traceback.print_exc()
        membersData.append({"Username":member.username, "FirstName":member.first_name, "LastName":member.last_name,
                            "Email":member.email, "DateJoined": dateAndTime }) #member.date_joined})
    
    return Response({"data":membersData})