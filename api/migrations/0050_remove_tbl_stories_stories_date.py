# Generated by Django 4.2.2 on 2023-06-21 02:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0049_alter_tbl_stories_stories_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tbl_stories',
            name='Stories_date',
        ),
    ]
