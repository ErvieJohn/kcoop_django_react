# Generated by Django 4.2.2 on 2023-07-06 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0060_tbl_home_home_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_home',
            name='Home_status',
            field=models.CharField(blank=True, default=''),
        ),
    ]
