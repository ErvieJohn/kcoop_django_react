# Generated by Django 4.2.2 on 2023-06-21 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0041_rename_announcements_date_tbl_careers_careers_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_stories',
            name='Stories_date',
            field=models.DateField(),
        ),
    ]