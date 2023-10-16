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
from .member_serializer import MyTokenObtainPairSerializer, memberMyTokenObtainPairSerializer, adminMyTokenObtainPairSerializer, AdminAuditTrailSerializer, MemberAuditTrailSerializer

from rest_framework.exceptions import APIException

from datetime import datetime
from dateutil import tz

import jwt
from rest_framework_jwt.utils import jwt_decode_handler

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class memberMyTokenObtainPairView(TokenObtainPairView):
    serializer_class = memberMyTokenObtainPairSerializer
    
class adminMyTokenObtainPairView(TokenObtainPairView):
    serializer_class = adminMyTokenObtainPairSerializer
    

class HttpResponseNoContent(HttpResponse):
    status_code = 204
    
class UpdateErrorException(APIException):
    status_code = 409
    default_detail = ""
        #default_detail = "Email already exist."
    
class UnauthorizedException(APIException):
    status_code = 401
    default_detail = "Not logged in"

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
                
                gen_uuid = str(uuid.uuid4())
                createMemberAuditTrail = MemberAuditTrail.objects.create(MemberAuditTrail_id = gen_uuid, MemberAuditTrail_user=saveUser.username,
                        MemberAuditTrail_activity= saveUser.username + " update the details", MemberAuditTrail_action="Update")
                
                data = "Your details has been updated!"
                Error = False
                
            else:
                if(saveUser.first_name != firstName or saveUser.last_name != lastName or 
                        saveUser.email != email):
                    u.save()
                    
                    gen_uuid = str(uuid.uuid4())
                    createMemberAuditTrail = MemberAuditTrail.objects.create(MemberAuditTrail_id = gen_uuid, MemberAuditTrail_user=saveUser.username,
                            MemberAuditTrail_activity= saveUser.username + " update the details", MemberAuditTrail_action="Update")
                    
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

@api_view(['GET']) 
@permission_classes([IsAuthenticated])
def getMembers(request):
    members = User.objects.filter(groups__name='Members')
    
    membersData = []
    for member in members:
        try:
            dateAndTime = str(member.date_joined) # convert time to string
            dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
            dateAndTime = dateAndTime[:19] # get only date and time
            
            dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
            dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
            
            dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
            dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
            
        except:
            traceback.print_exc()
        membersData.append({"Username":member.username, "FirstName":member.first_name, "LastName":member.last_name,
                            "Email":member.email, "DateJoined": dateAndTime }) #member.date_joined})
    
    return Response({"data":membersData})


@api_view(['POST']) 
@permission_classes([IsAuthenticated])
def searchMembers(request):
    searchBy = request.data["searchby"]
    inputSearch = request.data["inputsearch"]
    
    if(searchBy=="Firstname"):
        members = User.objects.filter(first_name__contains=inputSearch, groups__name='Members')
        
    elif(searchBy=="Lastname"):
        members = User.objects.filter(last_name__contains=inputSearch, groups__name='Members')
        
    elif(searchBy=="Email"):
        members = User.objects.filter(email__contains=inputSearch, groups__name='Members')
    
    else:
        members = User.objects.filter(username__contains=inputSearch, groups__name='Members')
        
    membersData = []
    for member in members:
        try:
            dateAndTime = str(member.date_joined) # convert time to string
            dateAndTime = dateAndTime.replace('T', ' ').replace('Z','') # remove the T and Z
            dateAndTime = dateAndTime[:19] # get only date and time
            
            dateAndTime = datetime.strptime(dateAndTime, '%Y-%m-%d %H:%M:%S') # convert to datetime type
            dateAndTime = dateAndTime.replace(tzinfo=tz.tzutc()) # change with utc
            
            dateAndTime = dateAndTime.astimezone(tz.tzlocal()) # convert the utc
            dateAndTime = dateAndTime.strftime("%Y-%m-%d %I:%M:%S %p") # convert the datetime YYYY-MM-DD hh:mm:ss PP
            
        except:
            traceback.print_exc()
        membersData.append({"Username":member.username, "FirstName":member.first_name, "LastName":member.last_name,
                            "Email":member.email, "DateJoined": dateAndTime }) #member.date_joined})
    
    return Response({"data":membersData})


@api_view(['POST']) 
@permission_classes([IsAuthenticated])
def deleteMember(request):
    if request.data:
        # token = request.META.get('HTTP_AUTHORIZATION').split(' ')
        # token = token[1]
        # tokenDecode = jwt_decode_handler(token)
        
        # isAdmin = User.objects.filter(username = tokenDecode["username"], groups__name = 'Members_Admin').exists()
        userAdmin = request.user
        isAdmin = userAdmin.groups.filter(name='Members_Admin').exists()
        
        
        print(isAdmin)
        if(isAdmin): 
            username = request.data["username"]
            #print("username: ", username)
            
            user = User.objects.filter(username=username).first()
            
            if(user):
                user.delete()
                
                gen_uuid = str(uuid.uuid4())
                createAdminAuditTrail = AdminAuditTrail.objects.create(AdminAuditTrail_id = gen_uuid, AdminAuditTrail_user=userAdmin,
                        AdminAuditTrail_activity= "Deleted the " + username, AdminAuditTrail_action="Delete")
                
                return Response({"detail":"Successfully deleted the member {}!".format(username)})
                
            else:
                raise UnauthorizedException
        
        else:
            raise UnauthorizedException


@api_view(['POST']) 
def logoutMember(request):
    if request.data:
        gen_uuid = str(uuid.uuid4())
        createMemberAuditTrail = MemberAuditTrail.objects.create(MemberAuditTrail_id = gen_uuid, MemberAuditTrail_user=request.data["username"],
                MemberAuditTrail_activity= request.data["username"] + " Logged Out ", MemberAuditTrail_action="Logout")
        
        return Response({"detail": request.data["username"] + " Logged Out"})
        
@api_view(['POST']) 
def logoutAdmin(request):
    if request.data:
        gen_uuid = str(uuid.uuid4())
        createAdminAuditTrail = AdminAuditTrail.objects.create(AdminAuditTrail_id = gen_uuid, AdminAuditTrail_user=request.data["username"],
                AdminAuditTrail_activity= request.data["username"] + " Logged Out ", AdminAuditTrail_action="Logout")
        
        return Response({"detail": request.data["username"] + " Logged Out"})
    
    
@api_view(['GET']) 
@permission_classes([IsAuthenticated])
def adminActivityLog(request):  
    try:
        user = request.user
        isAdmin = user.groups.filter(name='Members_Admin').exists()
        if(isAdmin):
            activityLogs = AdminAuditTrail.objects.all().order_by('-AdminAuditTrail_date', '-AdminAuditTrail_time')
            serializer = AdminAuditTrailSerializer(activityLogs, many=True)
            
            for i in range(len(serializer.data)):
                t_str = str(serializer.data[i]["AdminAuditTrail_time"])
                #t_str = t_str[0:8]
                t_obj = datetime.strptime(t_str, '%H:%M:%S.%f')
                #print(str(t_obj))
                t_am_pm = t_obj.strftime('%I:%M:%S %p')
                
                serializer.data[i]["AdminAuditTrail_time"] = t_am_pm
            
            return Response({"data":serializer.data})
        
        else:
            raise UnauthorizedException
            
    except:
        traceback.print_exc()
        

@api_view(['GET']) 
@permission_classes([IsAuthenticated])
def memberActivityLog(request):  
    try:
        user = request.user
        isAdmin = user.groups.filter(name='Members_Admin').exists()
        if(isAdmin):
            activityLogs = MemberAuditTrail.objects.all().order_by('-MemberAuditTrail_date', '-MemberAuditTrail_time')
            serializer = MemberAuditTrailSerializer(activityLogs, many=True)
            
            for i in range(len(serializer.data)):
                t_str = str(serializer.data[i]["MemberAuditTrail_time"])
                #t_str = t_str[0:8]
                t_obj = datetime.strptime(t_str, '%H:%M:%S.%f')
                #print(str(t_obj))
                t_am_pm = t_obj.strftime('%I:%M:%S %p')
                
                serializer.data[i]["MemberAuditTrail_time"] = t_am_pm
            
            return Response({"data":serializer.data})
        
        else:
            raise UnauthorizedException
            
    except:
        traceback.print_exc()
        
@api_view(['POST']) 
@permission_classes([IsAuthenticated])
def searchAdminActivityLog(request):
    user = request.user
    isAdmin = user.groups.filter(name='Members_Admin').exists()
    if(isAdmin):
        if request.data:
            inputsearch = request.data["inputsearch"]
            action = request.data["action"]
            dateFrom = request.data["dateFrom"]
            dateTo = request.data["dateTo"]
            timeFrom = request.data["timeFrom"]
            timeTo = request.data["timeTo"]
            
            print("timeFrom: ", timeFrom, " timeTo: ", timeTo)
            
            try:
                activityLogs = AdminAuditTrail.objects.all().order_by('-AdminAuditTrail_date', '-AdminAuditTrail_time')

                if(inputsearch):
                    activityLogs = activityLogs.filter(AdminAuditTrail_user__contains=inputsearch)
                    
                if(action):
                    activityLogs = activityLogs.filter(AdminAuditTrail_action=action)
                
                ### FOR DATE
                if(dateFrom and dateTo):
                    activityLogs = activityLogs.filter(AdminAuditTrail_date__range=[dateFrom,dateTo])

                elif(dateFrom and dateTo is None):
                    activityLogs = activityLogs.filter(AdminAuditTrail_date__gte=dateFrom)
                    
                elif(dateFrom is None and dateTo):
                    activityLogs = activityLogs.filter(AdminAuditTrail_date__lte=dateTo) 
                
                ### FOR TIME
                if(timeFrom and timeTo):
                    activityLogs = activityLogs.filter(AdminAuditTrail_time__range=[timeFrom,timeTo])
                    
                elif(timeFrom and timeTo is None):
                    activityLogs = activityLogs.filter(AdminAuditTrail_time__gte=timeFrom+":00")
                    
                elif(timeFrom is None and timeTo):
                    activityLogs = activityLogs.filter(AdminAuditTrail_time__lte=timeTo+":00")
                    
                
                serializer = AdminAuditTrailSerializer(activityLogs, many=True)
                
                if(len(serializer.data) > 0):
                    for i in range(len(serializer.data)):
                        t_str = str(serializer.data[i]["AdminAuditTrail_time"])
                        #t_str = t_str[0:8]
                        t_obj = datetime.strptime(t_str, '%H:%M:%S.%f')
                        #print(str(t_obj))
                        t_am_pm = t_obj.strftime('%I:%M:%S %p')
                        
                        serializer.data[i]["AdminAuditTrail_time"] = t_am_pm
            
                return Response({"data":serializer.data})
            
            except:
                traceback.print_exc()
    else:
        raise UnauthorizedException
        
        
        
        