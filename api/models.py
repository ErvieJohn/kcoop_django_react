from django.db import models
import uuid

# Create your models here.
#class TBL_Headers(models.Model):


class TBL_WhoWeAreType(models.Model):
    WhoWeAretype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    WhoWeAretype_name = models.CharField()
    WhoWeAretype_url = models.CharField()

class TBL_WhoWeAre(models.Model):
    WhoWeAre_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    WhoWeAretype_id = models.ForeignKey("TBL_WhoWeAreType", on_delete=models.CASCADE)
    WhoWeAre_title = models.CharField()
    WhoWeAre_content = models.CharField(blank=True, default="")
    WhoWeAre_image = models.CharField()

class TBL_ProgramAndServicesType(models.Model):
    ProgramAndServicestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    ProgramAndServicestype_name = models.CharField()
    ProgramAndServicestype_url = models.CharField()

class TBL_ProgramAndServices(models.Model):
    ProgramAndServices_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    ProgramAndServicestype_id = models.ForeignKey("TBL_ProgramAndServicesType", on_delete=models.CASCADE)
    ProgramAndServices_title = models.CharField()
    ProgramAndServices_logo = models.CharField()
    ProgramAndServices_content = models.CharField(blank=True, default="")
    ProgramAndServices_image = models.CharField()

class TBL_SatalliteOfficesType(models.Model):
    SatalliteOfficestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    SatalliteOfficestype_name = models.CharField()

class TBL_SatalliteOffices(models.Model):
    SatalliteOffices_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    SatalliteOfficestype_id = models.ForeignKey("TBL_SatalliteOfficesType", on_delete=models.CASCADE)
    SatalliteOffices_title = models.CharField()
    SatalliteOffices_logo = models.CharField()
    SatalliteOffices_content = models.CharField(blank=True, default="")
    SatalliteOffices_image = models.CharField()

class TBL_PublicationsType(models.Model):
    Publicationstype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Publicationstype_name = models.CharField()

class TBL_Publications(models.Model):
    Publications_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Publicationstype_id = models.ForeignKey("TBL_PublicationsType", on_delete=models.CASCADE)
    Publications_title = models.CharField()
    Publications_content = models.CharField(blank=True, default="")
    Publications_image = models.CharField()


class TBL_Announcements(models.Model):
    Announcements_id = models.AutoField(primary_key=True)
    Announcements_title = models.CharField()
    Announcements_date = models.CharField()
    Announcements_image = models.CharField()
    Announcements_content = models.TextField(blank=True, default="")

class TBL_StoriesType(models.Model):
    Storiestype_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Storiestype_name = models.CharField()

class TBL_Stories(models.Model):
    Stories_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Storiestype_id = models.ForeignKey("TBL_StoriesType", on_delete=models.CASCADE)
    Stories_title = models.CharField()
    Stories_date = models.CharField()
    Stories_content = models.CharField(blank=True, default="")
    Stories_image = models.CharField()
    Stories_ytlink = models.CharField()



class Announcements(models.Model):
    announcements_id = models.AutoField(primary_key=True)
    title = models.CharField()
    date = models.CharField()
    ImgSrc = models.CharField()
    description = models.TextField(blank=True, default="")




