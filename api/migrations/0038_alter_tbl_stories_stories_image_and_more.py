# Generated by Django 4.2.2 on 2023-06-20 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_tbl_publications_publications_pubdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_stories',
            name='Stories_image',
            field=models.CharField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='tbl_stories',
            name='Stories_ytlink',
            field=models.CharField(blank=True, default=''),
        ),
    ]