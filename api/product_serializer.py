from rest_framework import serializers
from .models import *

class TBL_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Category
        fields = ('Category_id', 'Category_name')

class TBL_ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = TBL_Product
        fields = ('User_id', 'Category_id', 'Product_id', 'Product_image', 'Product_title')
