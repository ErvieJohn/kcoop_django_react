# Generated by Django 4.2.2 on 2023-07-11 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0073_tbl_publications_publications_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_publications',
            name='Publications_status',
            field=models.CharField(blank=True, default='Deactivated', null=True),
        ),
    ]