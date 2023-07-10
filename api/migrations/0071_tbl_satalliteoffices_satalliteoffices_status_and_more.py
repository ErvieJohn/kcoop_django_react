# Generated by Django 4.2.2 on 2023-07-10 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0070_tbl_programandservices_programandservices_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_satalliteoffices',
            name='SatalliteOffices_status',
            field=models.CharField(blank=True, default='Active', null=True),
        ),
        migrations.AlterField(
            model_name='tbl_programandservices',
            name='ProgramAndServices_status',
            field=models.CharField(blank=True, default='Deactivated', null=True),
        ),
        migrations.AlterField(
            model_name='tbl_satalliteoffices',
            name='SatalliteOffices_image',
            field=models.ImageField(blank=True, default='no_img.jpg', null=True, upload_to=''),
        ),
    ]
