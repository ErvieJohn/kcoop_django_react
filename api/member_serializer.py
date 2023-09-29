from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .views import createAuditTrail
from .serializers import UserSerializer

from rest_framework.exceptions import APIException

class UnauthorizedException(APIException):
    status_code = 401
    default_detail = "Not logged in"

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if(user.groups.filter(name='MIS_ADMIN').exists() or user.groups.filter(name='MIS_TEAM').exists()):
            token = super().get_token(user)
            #print(token)
            # Add custom claims
            token['username'] = user.username
            # ...
            
            #print("token: ", token['username'])
            serializer = UserSerializer(user)
            isSuperUser = serializer.data["is_staff"]
            createAuditTrail("Logged in","Log In",token['username'],isSuperUser)

            return token 
        else:
            raise UnauthorizedException
            
  
class memberMyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if(user.groups.filter(name='Members').exists() or user.groups.filter(name='Members_Admin').exists()):
            token = super().get_token(user)
            #print(token)
            # Add custom claims
            token['username'] = user.username
            token['FirstName'] = user.first_name
            token['LastName'] = user.last_name
            token['Email'] = user.email
            #print("token: ", token)
            #token['first_name'] = user.username
            token['is_member_admin'] = user.groups.filter(name='Members_Admin').exists()
            # ...
            return token 
        else:
            raise UnauthorizedException
           
            
# @api_view(['POST'])
# def registerMember(request):
#     if request.data:
#         inputUser = request.data["Member_username"]
#         user = User.objects.create_user(username='testmember',
#                                  email='jlennon@beatles.com',
#                                  password='glass onion')

        
        