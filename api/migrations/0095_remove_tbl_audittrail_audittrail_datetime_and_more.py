# Generated by Django 4.2.2 on 2023-08-03 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0094_alter_tbl_audittrail_audittrail_datetime'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tbl_audittrail',
            name='AuditTrail_datetime',
        ),
        migrations.AddField(
            model_name='tbl_audittrail',
            name='AuditTrail_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='tbl_audittrail',
            name='AuditTrail_time',
            field=models.TimeField(auto_now_add=True, null=True),
        ),
    ]
