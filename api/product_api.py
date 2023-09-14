from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

import traceback 

from django.contrib.auth import authenticate
import uuid

from .product_serializer import TBL_CategorySerializer, TBL_ProductSerializer
from .serializers import UserSerializer

from django.contrib.auth.models import User, Group

from rest_framework.exceptions import APIException


class NotFoundException(APIException):
    status_code = 404
    default_detail = "Registration Error"

@api_view(['POST'])
def registerMember(request):
    if request.data:
        firstname = request.data["firstname"]
        lastname = request.data["lastname"]
        email = request.data["email"]
        username = request.data["username"]
        password = request.data["password"]
        
        # print(firstname,lastname,email,username,password)
        
        try:
            user = User.objects.create_user(username=username,email=email,password=password, 
                                            first_name=firstname, last_name=lastname)
            
            getUser = User.objects.get(username=username)
            groupMember = Group.objects.get(name='Members') 
            groupMember.user_set.add(getUser)
        
        except KeyError:
            traceback.print_exc()
            raise NotFoundException
        
        return Response({"data":username + " member has been created!"})

@api_view(['POST'])
def insertProduct(request):
    if request.data:
        username = request.data["username"]
        category_name = request.data["category_name"]
        
        category_exist = TBL_Category.objects.filter(Category_name=category_name).exists()
        
        # Check if Category is not exists create category
        if(not category_exist):
            gen_uuid = str(uuid.uuid4())
            try:
                createCategory = TBL_Category.objects.create(Category_id = gen_uuid, Category_name=category_name)
            except:
                traceback.print_exc()
            
            
        category = TBL_Category.objects.filter(Category_name=category_name)
        category_serializer = TBL_CategorySerializer(category, many=True)
        dataCategory = category_serializer.data[0]
        
        # create product
        categoryID = dataCategory["Category_id"]
        genProduct_id = str(uuid.uuid4())
        product_image = request.data['product_image']
        product_title = request.data['product_title']
        user = User.objects.get(username=username)
        #user_serializer = UserSerializer(user)
        #print(user)
        try:
            createProduct = TBL_Product.objects.create(User_id=user, Category_id=categoryID, Product_id=genProduct_id, Product_image=product_image, Product_title=product_title)
        except:
            traceback.print_exc()
        productData = TBL_Product.objects.filter(User_id=user)
        productSerializer = TBL_ProductSerializer(productData, many=True)
        data = productSerializer.data
        
        return Response({"data":data})
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def showMemberProduct(request):
    #print(request.data)
    user = request.user

    products = user.tbl_product_set.all()
    serializer = TBL_ProductSerializer(products, many=True)
    # print(serializer.data)
    
    categoryList = []
    
    categories = []
    for i in range (len(serializer.data)):
        if serializer.data[i]["Category_id"] not in categoryList:
            categoryList.append(serializer.data[i]["Category_id"])
            category = TBL_Category.objects.filter(Category_id=serializer.data[i]["Category_id"])
            categorySerializer = TBL_CategorySerializer(category, many=True)
            categories.append(categorySerializer.data[0])
    
    #print(categories)
        
    return Response({"products": serializer.data, "categories":categories})