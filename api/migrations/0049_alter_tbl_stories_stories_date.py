# Generated by Django 4.2.2 on 2023-06-21 02:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0048_alter_tbl_stories_stories_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_stories',
            name='Stories_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]