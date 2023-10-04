from django.db import models
import uuid

from datetime import datetime

from django.contrib.auth.hashers import make_password

# Create your models here.
#class TBL_Headers(models.Model):

class TBL_Header(models.Model):
    Header_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Header_name = models.CharField()
    Header_url = models.CharField(blank=True, default="")
    Header_logo = models.CharField(blank=True, default="")

class TBL_WhoWeAreType(models.Model):
    WhoWeAretype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    WhoWeAretype_name = models.CharField()
    WhoWeAretype_url = models.CharField()

class TBL_WhoWeAre(models.Model):
    WhoWeAre_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    WhoWeAretype_id = models.ForeignKey("TBL_WhoWeAreType", on_delete=models.CASCADE)
    WhoWeAre_title = models.CharField()
    WhoWeAre_content = models.TextField(blank=True, default="")
    WhoWeAre_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    WhoWeAre_status = models.TextField(null=True, blank=True, default="Deactivated")

class TBL_ProgramAndServicesType(models.Model):
    ProgramAndServicestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    ProgramAndServicestype_name = models.CharField()
    ProgramAndServicestype_url = models.CharField()
    ProgramAndServicestype_logoimage = models.ImageField(null=True, blank=True, default="no_img.jpg")
    ProgramAndServicestype_logo = models.ImageField(null=True, blank=True, default="no_img.jpg")
                                                    #upload_to='ProgramAndServices/', 
class TBL_ProgramAndServices(models.Model):
    ProgramAndServices_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    ProgramAndServicestype_id = models.ForeignKey("TBL_ProgramAndServicesType", on_delete=models.CASCADE)
    ProgramAndServices_title = models.CharField()
    ProgramAndServices_content = models.CharField(blank=True, default="")
    ProgramAndServices_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    ProgramAndServices_status = models.CharField(null=True, blank=True, default="Deactivated")

class TBL_SatalliteOfficesType(models.Model):
    SatalliteOfficestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    SatalliteOfficestype_name = models.CharField()
    SatalliteOfficestype_url = models.CharField()

class TBL_SatalliteOffices(models.Model):
    SatalliteOffices_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    SatalliteOfficestype_id = models.ForeignKey("TBL_SatalliteOfficesType", on_delete=models.CASCADE)
    SatalliteOffices_region = models.CharField()
    SatalliteOffices_city = models.CharField()
    SatalliteOffices_content = models.CharField(blank=True, default="")
    SatalliteOffices_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    SatalliteOffices_status = models.CharField(null=True, blank=True, default="Deactivated")
    
class TBL_PublicationsType(models.Model):
    Publicationstype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Publicationstype_name = models.CharField()
    Publicationstype_url = models.CharField()

class TBL_Publications(models.Model):
    Publications_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Publicationstype_id = models.ForeignKey("TBL_PublicationsType", on_delete=models.CASCADE)
    Publications_name = models.CharField(null=True, blank=True, default="")
    Publications_title = models.CharField(null=True, blank=True, default="")
    Publications_content = models.TextField(null=True, blank=True, default="")
    Publications_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    Publications_file = models.FileField(null=True, blank=True, default="")
    Publications_pubDate = models.DateField(null=True, blank=True,default="")
    Publications_status = models.CharField(null=True, blank=True, default="Deactivated")

class TBL_StoriesType(models.Model):
    Storiestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Storiestype_name = models.CharField()
    Storiestype_url = models.CharField()

class TBL_Stories(models.Model):
    Stories_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Storiestype_id = models.ForeignKey("TBL_StoriesType", on_delete=models.CASCADE)
    Stories_name = models.CharField(blank=True, default="")
    Stories_title = models.CharField()
    Stories_date = models.DateField(null=True, blank=True)
    Stories_content = models.CharField(blank=True, default="")
    Stories_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    Stories_ytlink = models.CharField(null=True, blank=True, default="")
    Stories_status = models.CharField(null=True, blank=True, default="Deactivated")
    
class TBL_Careers(models.Model):
    Careers_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Careers_title = models.CharField(blank=True, default="")
    Careers_date = models.CharField(blank=True, default="")
    Careers_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    Careers_content = models.TextField(blank=True, default="")
    Careers_status = models.CharField(null=True, blank=True, default="Deactivated")
    
class TBL_Home(models.Model):
    Home_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Home_title = models.CharField(blank=True, default="")
    Home_content = models.CharField(blank=True, default="")
    Home_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    Home_url = models.CharField(blank=True, default="", null=True)
    Home_date = models.DateField(null=True, blank=True, default=None)
    Home_status = models.CharField(blank=True, default="")
    
class Image(models.Model):
    image = models.ImageField()
    
    
class TBL_AuditTrail(models.Model):
    AuditTrail_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    AuditTrail_user = models.CharField(blank=True, default="")
    AuditTrail_activity = models.CharField(blank=True, default="")
    AuditTrail_date = models.DateField(auto_now_add=True, blank=True, null=True)
    AuditTrail_time = models.TimeField(auto_now_add=True, blank=True, null=True)
    AuditTrail_action = models.CharField(blank=True, default="")
    AuditTrail_staff = models.CharField(blank=True, default="")


from django.contrib.auth.models import User
class TBL_Tag(models.Model):
    Tag_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Tag_name = models.CharField(max_length=255)  

class TBL_Category(models.Model):
    Category_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Category_name = models.CharField(blank=True, default="", unique=True)
    
class TBL_Product(models.Model):
    User_id =  models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'groups__name': "Members"})
    Category_id = models.ForeignKey("TBL_Category", on_delete=models.CASCADE)
    Product_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Product_image = models.ImageField(null=True, blank=True, default="no_img.jpg")
    Product_title = models.CharField(blank=True, default="")
    Product_status = models.CharField(null=True, blank=True, default="Activated")
    Tag = models.ManyToManyField('TBL_Tag')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




