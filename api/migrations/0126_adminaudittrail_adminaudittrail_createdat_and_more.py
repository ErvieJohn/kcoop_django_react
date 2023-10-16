# Generated by Django 4.2.2 on 2023-10-16 05:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0125_rename_adminactivitylogs_adminaudittrail'),
    ]

    operations = [
        migrations.AddField(
            model_name='adminaudittrail',
            name='AdminAuditTrail_createdAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='memberaudittrail',
            name='MemberAuditTrail_createdAt',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
