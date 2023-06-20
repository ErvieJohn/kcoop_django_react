from rest_framework import serializers
from .models import *

class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Header
        fields = ('Header_name', 'Header_url')

class AnnouncementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'

class WhoWeAreTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_WhoWeAreType
        fields = ('WhoWeAretype_name', 'WhoWeAretype_url')
        
class WhoWeAreSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_WhoWeAre
        fields = ('WhoWeAre_title','WhoWeAre_content', 'WhoWeAre_image')


class ProgramsAndServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_ProgramAndServicesType
        fields = ('ProgramAndServicestype_name', 'ProgramAndServicestype_url')

# FOR PROGRAMS AND SERVICES
class ProgramsAndServicesHSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_ProgramAndServices
        fields = ('ProgramAndServices_title', 'ProgramAndServices_content', 'ProgramAndServices_image', 'ProgramAndServices_logo')      

# FOR PROGRAMS AND SERVICES LOGOs
class ProgramsAndServicesLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_ProgramAndServicesType
        fields = ('ProgramAndServicestype_logoimage','ProgramAndServicestype_url')
        
# FOR PROGRAMS AND SERVICES Title LOGO   
class HeaderLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Header
        fields = ('Header_logo','Header_name')   


class TBL_SatalliteOfficesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_SatalliteOfficesType
        fields = ('SatalliteOfficestype_name', 'SatalliteOfficestype_url')
        
        
class TBL_SatalliteOfficesContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_SatalliteOffices
        fields = ('SatalliteOffices_region', 'SatalliteOffices_city', 'SatalliteOffices_content', 'SatalliteOffices_image')

class TBL_PublicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_PublicationsType
        fields = ('Publicationstype_name', 'Publicationstype_url')
        
class TBL_PublicationsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Publications
        fields = ('Publications_id','Publications_name', 'Publications_title', 'Publications_content', 'Publications_image', 'Publications_file')

class TBL_StoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_StoriesType
        fields = ('Storiestype_name', 'Storiestype_url')
        
class TBL_StoriesContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Stories
        fields = ('Stories_id', 'Stories_name', 'Stories_title', 'Stories_date', 'Stories_content', 'Stories_image', 'Stories_ytlink')

class TBL_CareersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Careers
        fields = ('Careers_title', 'Careers_date', 'Careers_image', 'Careers_content')