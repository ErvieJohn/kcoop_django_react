# Generated by Django 4.2.2 on 2023-08-02 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0090_rename_audittrail_time_tbl_audittrail_audittrail_datetime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tbl_audittrail',
            name='AuditTrail_datetime',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
