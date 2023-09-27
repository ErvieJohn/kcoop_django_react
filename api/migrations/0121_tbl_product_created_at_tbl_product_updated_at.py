# Generated by Django 4.2.2 on 2023-09-26 01:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0120_tbl_tag_tbl_product_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_product',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tbl_product',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]