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