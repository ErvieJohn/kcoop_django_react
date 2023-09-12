from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view

import traceback 

from django.contrib.auth import authenticate


from rest_framework_simplejwt.views import TokenObtainPairView
from .member_serializer import MyTokenObtainPairSerializer, memberMyTokenObtainPairSerializer
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class memberMyTokenObtainPairView(TokenObtainPairView):
    serializer_class = memberMyTokenObtainPairSerializer
    

