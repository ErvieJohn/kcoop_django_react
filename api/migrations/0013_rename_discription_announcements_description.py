# Generated by Django 4.2.2 on 2023-06-14 08:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_tbl_announcements_tbl_programandservicestype_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='announcements',
            old_name='discription',
            new_name='description',
        ),
    ]
