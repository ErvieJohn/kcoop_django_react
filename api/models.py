from django.db import models

# Create your models here.
class Home(models.Model):
    home_id = models.AutoField(primary_key=True)
    image_slide = models.CharField()
    yt_link = models.CharField()