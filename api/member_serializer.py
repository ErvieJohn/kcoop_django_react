from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .views import createAuditTrail
from .serializers import UserSerializer

from rest_framework.exceptions import APIException

import uuid
from rest_framework import serializers
from .models import *

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
        if(user.groups.filter(name='Members').exists()): # or user.groups.filter(name='Members_Admin').exists()
            token = super().get_token(user)
            #print(token)
            # Add custom claims
            token['username'] = user.username
            token['FirstName'] = user.first_name
            token['LastName'] = user.last_name
            token['Email'] = user.email
            #print(user.first_name)
            #print("user.last_name: ", user.last_name)
            #print("token: ", token)
            #token['first_name'] = user.username
            # token['is_member_admin'] = user.groups.filter(name='Members_Admin').exists()
            # ...
            
            gen_uuid = str(uuid.uuid4())
            createMemberAuditTrail = MemberAuditTrail.objects.create(MemberAuditTrail_id = gen_uuid, MemberAuditTrail_user=user.username,
                MemberAuditTrail_activity= user.username + " Logged in", MemberAuditTrail_action="Login")
            
            return token 
        else:
            raise UnauthorizedException
        
class adminMyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if(user.groups.filter(name='Members_Admin').exists()): # or user.groups.filter(name='Members').exists()
            token = super().get_token(user)
            #print(token)
            # Add custom claims
            token['username'] = user.username
            # token['FirstName'] = user.first_name
            # token['LastName'] = user.last_name
            # token['Email'] = user.email
            #print(user.first_name)
            #print("user.last_name: ", user.last_name)
            #print("token: ", token)
            #token['first_name'] = user.username
            # token['is_member_admin'] = user.groups.filter(name='Members_Admin').exists()
            # ...
            
            gen_uuid = str(uuid.uuid4())
            createAdminAuditTrail = AdminAuditTrail.objects.create(AdminAuditTrail_id = gen_uuid, AdminAuditTrail_user=user.username,
                AdminAuditTrail_activity= user.username + " Logged in", AdminAuditTrail_action="Login")
            
            return token 
        else:
            raise UnauthorizedException
           
            
class MemberAuditTrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberAuditTrail
        fields = ('MemberAuditTrail_id', 'MemberAuditTrail_user', 'MemberAuditTrail_activity', 'MemberAuditTrail_action', 'MemberAuditTrail_date', 'MemberAuditTrail_time')

class AdminAuditTrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminAuditTrail
        fields = ('AdminAuditTrail_id', 'AdminAuditTrail_user', 'AdminAuditTrail_activity', 'AdminAuditTrail_action', 'AdminAuditTrail_date', 'AdminAuditTrail_time')

# @api_view(['POST'])
# def registerMember(request):
#     if request.data:
#         inputUser = request.data["Member_username"]
#         user = User.objects.create_user(username='testmember',
#                                  email='jlennon@beatles.com',
#                                  password='glass onion')

        
        