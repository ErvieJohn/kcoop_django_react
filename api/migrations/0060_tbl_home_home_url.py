# Generated by Django 4.2.2 on 2023-06-26 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0059_tbl_home_home_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_home',
            name='Home_url',
            field=models.CharField(blank=True, default=''),
        ),
    ]