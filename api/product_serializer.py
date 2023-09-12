from rest_framework import serializers
from .models import *

class TBL_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Category
        fields = ('User_id', 'Category_id', 'Category_name')
