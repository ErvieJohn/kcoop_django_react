# Generated by Django 4.2.2 on 2023-07-13 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0077_alter_tbl_publications_publications_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_stories',
            name='Stories_status',
            field=models.CharField(blank=True, default='Active', null=True),
        ),
        migrations.AlterField(
            model_name='tbl_stories',
            name='Stories_image',
            field=models.ImageField(blank=True, default='no_img.jpg', null=True, upload_to=''),
        ),
    ]