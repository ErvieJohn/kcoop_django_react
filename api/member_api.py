from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view

import traceback 

from django.contrib.auth import authenticate
from django.contrib.auth.models import User

@api_view(['POST'])
def getMember(request):
    if request.data:
        inputUser = request.data["Member_username"]
        inputPass = request.data["Member_password"]
        
        user = authenticate(username=inputUser, password=inputPass)
        
        Member = TBL_Member.objects.filter(Member_username=inputUser)
        
        if user is not None:
            #isSuperUser = User.objects.get(username=inputUser)
            
            return Response({"result":"Success", "admin": True, "Member": inputUser})
        
        else:
            if(Member):
                serializers = TBL_MemberSerializer(Member, many=True)
                memberPass = serializers.data[0]["Member_password"]
                if(memberPass == inputPass):
                    #print(serializers.data[0]["Member_password"], )
                    memberVal = serializers.data[0]["Member_username"]
                    return Response({"result":"Success", "admin": True, "Member":memberVal})
                else:
                    return Response({"result":"Invalid Username or Password","Member":None})
            else:
                return Response({"result":"Invalid Username or Password","Member":None})
