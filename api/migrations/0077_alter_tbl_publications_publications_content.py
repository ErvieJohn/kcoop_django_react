# Generated by Django 4.2.2 on 2023-07-11 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0076_alter_tbl_publications_publications_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_publications',
            name='Publications_content',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]