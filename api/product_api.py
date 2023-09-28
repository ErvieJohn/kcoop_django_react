from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

import traceback 

from django.contrib.auth import authenticate
import uuid

from .product_serializer import TBL_CategorySerializer, TBL_ProductSerializer, TBL_TagSerializer
from .serializers import UserSerializer

from django.contrib.auth.models import User, Group

from rest_framework.exceptions import APIException

import json

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
        tags = json.loads(request.data["tags"])
        
        category_exist = TBL_Category.objects.filter(Category_name=category_name).exists()
        
        # Check if Category is not exists create category
        if(not category_exist):
            gen_uuid = str(uuid.uuid4())
            # print(type(gen_uuid))
            try:
                createCategory = TBL_Category.objects.create(Category_id = gen_uuid, Category_name=category_name)
            except:
                traceback.print_exc()
            
            
        category = TBL_Category.objects.filter(Category_name=category_name)
        category_serializer = TBL_CategorySerializer(category, many=True)
        dataCategory = category_serializer.data[0]
        
        # create product
        categoryID = str(dataCategory["Category_id"])
        
        categ = TBL_Category.objects.get(Category_id=categoryID)
        #print(categ)
        genProduct_id = str(uuid.uuid4())
        product_image = request.data['product_image']
        product_title = request.data['product_title']
        user = User.objects.get(username=username)
        #user_serializer = UserSerializer(user)
        #print(user)
        try:
            createProduct = TBL_Product.objects.create(User_id=user, Category_id=categ, Product_id=genProduct_id, Product_image=product_image, Product_title=product_title)
            
            
            for i in tags:
                tag_exist = TBL_Tag.objects.filter(Tag_name=i["text"]).exists()
                if(not tag_exist):
                    genTag_id = str(uuid.uuid4())
                    createTag = TBL_Tag.objects.create(Tag_id=genTag_id, Tag_name=i["text"])
                else:
                    createTag = TBL_Tag.objects.get(Tag_name=i["text"])
                    
                createProduct.Tag.add(createTag)
        
        except:
            traceback.print_exc()
            
            
        productData = TBL_Product.objects.filter(User_id=user).order_by('-created_at')
        productSerializer = TBL_ProductSerializer(productData, many=True)
        data = productSerializer.data
        
        return Response({"data":data})
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def showMemberProduct(request):
    #print(request.data)
    user = request.user

    products = user.tbl_product_set.all().order_by('-created_at')
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
            
    tagList = []
    tagsUser = []
    for data in serializer.data:
        for tags in data["Tag"]:
            if tags not in tagList:
                tagList.append(tags)
                tag = TBL_Tag.objects.filter(Tag_id=tags)
                tagSerializer = TBL_TagSerializer(tag, many=True)
                firstTagData = tagSerializer.data[0]
                tagsUser.append(firstTagData)
                
    # Changing the key to id and text for REACTTAG
    for index in range (len(tagsUser)):
        tagsUser[index]["id"] = tagsUser[index].pop("Tag_id")
        tagsUser[index]["text"] = tagsUser[index].pop("Tag_name")
        
    # print(data)
    
    #print(tagsUser)
    
    #print(serializer.data)
        
    return Response({"products": serializer.data, "categories":categories, "tags": tagsUser})

## CHECKING IF UUID IS VALID
def is_valid_uuid(val):
    try:
        uuid.UUID(str(val))
        return True
    except ValueError:
        return False

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def searchMemberProduct(request):
    user = request.user
    search = request.data['input_search']
    tags = json.loads(request.data['selected_tags'])
    
    #print("tags: ", tags)
    
    selectedCategory = request.data['categories']
    
    products = TBL_Product.objects.filter(User_id=user, Product_title__contains = search).order_by('-created_at')
    
    if(len(selectedCategory)>0):
        products = products.filter(Category_id__in=selectedCategory)
        
    tagsID = []
    if(len(tags)>0):
        for tag in tags:
            if(is_valid_uuid(tag["id"])):
                tagsID.append(tag["id"])

        
        products = products.filter(Tag__in = tagsID)
        
            #traceback.print_exc()
            #print(ValueError)
        
        
        
    products = products.distinct() # PREVENT DUPLICATE VALUE
    serializer = TBL_ProductSerializer(products, many=True)
    
    categoryList = []
    
    categories = []
        
    for i in range (len(serializer.data)):
        if serializer.data[i]["Category_id"] not in categoryList:
            categoryList.append(serializer.data[i]["Category_id"])
            category = TBL_Category.objects.filter(Category_id=serializer.data[i]["Category_id"])
            categorySerializer = TBL_CategorySerializer(category, many=True)
            categories.append(categorySerializer.data[0])

    # print("len: ",len(serializer.data))
    #print(serializer.data)
    
    tagList = []
    tagsUser = []
    for data in serializer.data:
        for tags in data["Tag"]:
            if tags not in tagList:
                tagList.append(tags)
                tag = TBL_Tag.objects.filter(Tag_id=tags)
                tagSerializer = TBL_TagSerializer(tag, many=True)
                firstTagData = tagSerializer.data[0]
                tagsUser.append(firstTagData)
                
    for index in range (len(tagsUser)):
        tagsUser[index]["id"] = tagsUser[index].pop("Tag_id")
        tagsUser[index]["text"] = tagsUser[index].pop("Tag_name")
    
    #print(serializer.data)
    
    return Response({"products": serializer.data, "categories":categories, "tags": tagsUser})