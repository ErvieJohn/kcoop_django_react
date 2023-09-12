from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view

import traceback 

from django.contrib.auth import authenticate
import uuid

from .product_serializer import TBL_CategorySerializer

@api_view(['POST'])
def insertProduct(request):
    if request.data:
        #user_id = request.data["user_id"]
        category_name = request.data["category_name"]
        
        # Check if Category is already exists
        if(TBL_Category.objects.get(Category_name=category_name)):
            print("category exists")
        else:
            print("category not exists")
        # Create Category
        # productID = 