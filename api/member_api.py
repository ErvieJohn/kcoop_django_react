from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view

import traceback 

from django.contrib.auth import authenticate


from rest_framework_simplejwt.views import TokenObtainPairView
from .member_serializer import MyTokenObtainPairSerializer, memberMyTokenObtainPairSerializer


@api_view(['POST'])
def getMember(request):
    if request.data:
        inputUser = request.data["Member_username"]
        inputPass = request.data["Member_password"]
        
        Member = TBL_Member.objects.filter(Member_username=inputUser)
        
        if(Member):
            serializers = TBL_MemberSerializer(Member, many=True)
            # print(serializers.data[0])
            memberPass = serializers.data[0]["Member_password"]
            if(memberPass == inputPass):
                #print(serializers.data[0]["Member_password"], )
                username = serializers.data[0]["Member_username"]
                firstname = serializers.data[0]["Member_firstname"]
                lastname = serializers.data[0]["Member_lastname"]
                
                
                memberVal = [{"username": username, "firstname": firstname, "lastname": lastname}]
                
                return Response({"result":"Success", "Member": memberVal})
            else:
                return Response({"result":"Invalid Username or Password","Member":None})
        else:
            return Response({"result":"Invalid Username or Password","Member":None})
        
@api_view(['POST'])
def getMemberAdmin(request):
    if request.data:
        inputUser = request.data["Member_username"]
        
        Member = TBL_Member.objects.filter(Member_username=inputUser)
        
        if(Member):
            serializers = TBL_MemberSerializer(Member, many=True)
            admin = serializers.data[0]["Member_admin"]
           
            return Response({"isAdmin": admin})
        else:
            return Response({"detail": "missing member"})
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class memberMyTokenObtainPairView(TokenObtainPairView):
    serializer_class = memberMyTokenObtainPairSerializer
    

