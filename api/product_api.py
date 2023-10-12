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

from datetime import datetime
from dateutil import tz

class NotFoundException(APIException):
    status_code = 401
    default_detail = "Registration Error"
    
class EmailExistException(APIException):
    status_code = 409
    default_detail = "Email already exist."
    
class UserExistException(APIException):
    status_code = 409
    default_detail = "Username already exist."
    
class MemberNotFoundException(APIException):
    status_code = 401
    default_detail = ""
    # default_detail = "Member Not Found"

@api_view(['POST'])
def registerMember(request):
    if request.data:
        firstname = request.data["firstname"]
        lastname = request.data["lastname"]
        email = request.data["email"]
        username = request.data["username"]
        password = request.data["password"]
        
        # print(firstname,lastname,email,username,password)
        
        getEmail = User.objects.filter(email=email).exists()
        
        if(not getEmail):
            getUser = User.objects.filter(username=username).exists()
            if(not getUser):
                try:
                    user = User.objects.create_user(username=username,email=email,password=password, 
                                                    first_name=firstname, last_name=lastname)
                    
                    getUser = User.objects.get(username=username)
                    groupMember = Group.objects.get(name='Members') 
                    groupMember.user_set.add(getUser)
                
                except:
                    traceback.print_exc()
                    
                return Response({"data":username + " member has been created!"})
                    
            else:
                raise UserExistException
                #return Response({"data":"Username already exist."})
        
        else:
            raise EmailExistException
            #return Response({"data":"Email already exist."})

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
            createProduct = TBL_Product.objects.create(User_id=user, Category_id=categ, Product_id=genProduct_id, Product_image=product_image, Product_title=product_title, Product_status="Active")
            
            
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

    products = user.tbl_product_set.filter(Product_status="Active").order_by('-created_at')
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
    
    products = TBL_Product.objects.filter(User_id=user, Product_title__contains = search, Product_status="Active").order_by('-created_at')
    
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


### FOR ADMIN
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def getMemberProduct(request):
    username = request.data['username']
    try:
        user = User.objects.filter(username=username).first()
        # print(user)
        
    except:
        traceback.print_exc()
        
    if(user):
        ### FOR DATE TIME FORMAT
        dateAndTime = str(user.date_joined) # convert time to string
        dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
        dateAndTime = dateAndTime[:19] # get only date and time
        
        dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
        dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
        
        dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
        dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
        
        userData = {"Username":user.username, "FirstName":user.first_name, "LastName":user.last_name,
                                "Email":user.email, "DateJoined": dateAndTime }
        
        ### For Active
        memberProductActive = user.tbl_product_set.filter(Product_status="Active").order_by('-created_at')
        serializer = TBL_ProductSerializer(memberProductActive, many=True)
        
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
            
            
        ### For Inactive
        memberProductInactive = user.tbl_product_set.filter(Product_status="Inactive").order_by('-created_at')
        serializerInactive = TBL_ProductSerializer(memberProductInactive, many=True)
        
        categoryListInactive = []
        
        categoriesInactive = []
        for i in range (len(serializerInactive.data)):
            if serializerInactive.data[i]["Category_id"] not in categoryListInactive:
                categoryListInactive.append(serializerInactive.data[i]["Category_id"])
                category = TBL_Category.objects.filter(Category_id=serializerInactive.data[i]["Category_id"])
                categorySerializer = TBL_CategorySerializer(category, many=True)
                categoriesInactive.append(categorySerializer.data[0])
                
        tagListInactive = []
        tagsUserInactive = []
        for data in serializerInactive.data:
            for tags in data["Tag"]:
                if tags not in tagListInactive:
                    tagListInactive.append(tags)
                    tag = TBL_Tag.objects.filter(Tag_id=tags)
                    tagSerializer = TBL_TagSerializer(tag, many=True)
                    firstTagData = tagSerializer.data[0]
                    tagsUserInactive.append(firstTagData)
                    
        # Changing the key to id and text for REACTTAG
        for index in range (len(tagsUserInactive)):
            tagsUserInactive[index]["id"] = tagsUserInactive[index].pop("Tag_id")
            tagsUserInactive[index]["text"] = tagsUserInactive[index].pop("Tag_name")
        
        return Response({"userData":userData, "productsDataActive": {"products": serializer.data, "categories":categories, "tags": tagsUser}
                         , "productsDataInactive": {"products": serializerInactive.data, "categories":categoriesInactive, "tags": tagsUserInactive}})
    
    else:
        raise MemberNotFoundException("Member Not Found!")
    
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateMemberProduct(request):
    if request.data:
        username = request.data['username']
        status = request.data["status"]
        productID = request.data["product_id"]

        try:
            user = User.objects.filter(username=username).first()
            # print(user)
            
        except:
            traceback.print_exc()
            
        if(user):
            try:
                memberProduct = user.tbl_product_set.get(Product_id=productID)
                memberProduct.Product_status = status
                memberProduct.save()
            except:
                traceback.print_exc()

            return Response({"detail":"Successfully update the status!"})
        
        else:
            raise MemberNotFoundException("Member Not Found!")    
        

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def deleteMemberProduct(request):
    if request.data:
        username = request.data['username']
        productID = request.data["product_id"]

        try:
            user = User.objects.filter(username=username).first()
            # print(user)
            
        except:
            traceback.print_exc()
            
        if(user):
            try:
                memberProduct = user.tbl_product_set.get(Product_id=productID)
                memberProduct.delete()
            except:
                traceback.print_exc()

            return Response({"detail":"Successfully deleted the product!"})
        
        else:
            raise MemberNotFoundException("Member Not Found!")    
        
        
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def modifyMemberProduct(request):
    if request.data:
        username = request.data['username']
        productID = request.data["product_id"]
        
        category_name = request.data["category_name"]
        tags = json.loads(request.data["tags"])
        
        product_image = request.data['product_image']
        changedImage = json.loads(request.data['changedImage'])
        product_title = request.data['product_title']
        
        
        
        category_exist = TBL_Category.objects.filter(Category_name=category_name).exists()
        
        # Check if Category is not exists create category
        if(not category_exist):
            gen_uuid = str(uuid.uuid4())
            # print(type(gen_uuid))
            try:
                createCategory = TBL_Category.objects.create(Category_id = gen_uuid, Category_name=category_name)
            except:
                traceback.print_exc()
        
        category = TBL_Category.objects.get(Category_name=category_name)            


        try:
            user = User.objects.filter(username=username).first()
            # print(user)
            
        except:
            traceback.print_exc()
            
        if(user):
            try:
                memberProduct = user.tbl_product_set.get(Product_id=productID)
                memberProduct.Product_title = product_title
                memberProduct.Category_id = category
            
                print("changedImage: ", changedImage)
                if(changedImage):
                    print("READDDD?")
                    memberProduct.Product_image = product_image
                    
                memberProduct.Tag.set([])
                
                for i in tags:
                    tag_exist = TBL_Tag.objects.filter(Tag_name=i["text"]).exists()
                    if(not tag_exist):
                        genTag_id = str(uuid.uuid4())
                        createTag = TBL_Tag.objects.create(Tag_id=genTag_id, Tag_name=i["text"])
                    else:
                        createTag = TBL_Tag.objects.get(Tag_name=i["text"])
                        
                    memberProduct.Tag.add(createTag)
                
                memberProduct.save()
            except:
                traceback.print_exc()

            return Response({"detail":"Successfully modified the product!"})
        
        else:
            raise MemberNotFoundException("Member Not Found!")    
        

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def searchProduct(request):
    user = request.data['username']
    search = request.data['input_search']
    tags = json.loads(request.data['selected_tags'])
    selectedCategory = request.data['categories']

    try:
        user = User.objects.filter(username=user).first()
        # print(user)
        
        if(user):
            ### FOR DATE TIME FORMAT
            dateAndTime = str(user.date_joined) # convert time to string
            dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
            dateAndTime = dateAndTime[:19] # get only date and time
            
            dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
            dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
            
            dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
            dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
            
            userData = {"Username":user.username, "FirstName":user.first_name, "LastName":user.last_name,
                                    "Email":user.email, "DateJoined": dateAndTime }
            
        
            memberProductActive = user.tbl_product_set.filter(Product_status="Active", User_id=user, Product_title__contains = search).order_by('Product_title')
            
            if(len(selectedCategory)>0):
                memberProductActive = memberProductActive.filter(Category_id__in=selectedCategory)

            tagsID = []
            if(len(tags)>0):
                for tag in tags:
                    if(is_valid_uuid(tag["id"])):
                        tagsID.append(tag["id"])

                memberProductActive = memberProductActive.filter(Tag__in = tagsID)
            
            serializer = TBL_ProductSerializer(memberProductActive, many=True)
            
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
                for tagsInactive in data["Tag"]:
                    if tagsInactive not in tagList:
                        tagList.append(tagsInactive)
                        tag = TBL_Tag.objects.filter(Tag_id=tagsInactive)
                        tagSerializer = TBL_TagSerializer(tag, many=True)
                        firstTagData = tagSerializer.data[0]
                        tagsUser.append(firstTagData)
                        
            # Changing the key to id and text for REACTTAG
            for index in range (len(tagsUser)):
                tagsUser[index]["id"] = tagsUser[index].pop("Tag_id")
                tagsUser[index]["text"] = tagsUser[index].pop("Tag_name")
                
                
            ### For Inactive
            memberProductInactive = user.tbl_product_set.filter(Product_status="Inactive", User_id=user, Product_title__contains = search).order_by('-created_at')
            if(len(selectedCategory)>0):
                memberProductActive = memberProductActive.filter(Category_id__in=selectedCategory)
                
         
            tagsID = []
            if(len(tags)>0):
                for tag in tags:
                    if(is_valid_uuid(tag["id"])):
                        tagsID.append(tag["id"])

                memberProductActive = memberProductActive.filter(Tag__in = tagsID)
            
            serializerInactive = TBL_ProductSerializer(memberProductInactive, many=True)
            
            categoryListInactive = []
            
            categoriesInactive = []
            for i in range (len(serializerInactive.data)):
                if serializerInactive.data[i]["Category_id"] not in categoryListInactive:
                    categoryListInactive.append(serializerInactive.data[i]["Category_id"])
                    category = TBL_Category.objects.filter(Category_id=serializerInactive.data[i]["Category_id"])
                    categorySerializer = TBL_CategorySerializer(category, many=True)
                    categoriesInactive.append(categorySerializer.data[0])
                    
            tagListInactive = []
            tagsUserInactive = []
            for data in serializerInactive.data:
                for tags in data["Tag"]:
                    if tags not in tagListInactive:
                        tagListInactive.append(tags)
                        tag = TBL_Tag.objects.filter(Tag_id=tags)
                        tagSerializer = TBL_TagSerializer(tag, many=True)
                        firstTagData = tagSerializer.data[0]
                        tagsUserInactive.append(firstTagData)
                        
            # Changing the key to id and text for REACTTAG
            for index in range (len(tagsUserInactive)):
                tagsUserInactive[index]["id"] = tagsUserInactive[index].pop("Tag_id")
                tagsUserInactive[index]["text"] = tagsUserInactive[index].pop("Tag_name")
            
            return Response({"userData":userData, "productsDataActive": {"products": serializer.data, "categories":categories, "tags": tagsUser}
                            , "productsDataInactive": {"products": serializerInactive.data, "categories":categoriesInactive, "tags": tagsUserInactive}})
        
        else:
            raise MemberNotFoundException("Member Not Found!")
        
    except:
        traceback.print_exc()
      
    
    
        