# Generated by Django 4.2.2 on 2023-08-02 08:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0089_rename_audittrail_activity_tbl_audittrail_audittrail_action'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tbl_audittrail',
            old_name='AuditTrail_time',
            new_name='AuditTrail_datetime',
        ),
        migrations.RemoveField(
            model_name='tbl_audittrail',
            name='AuditTrail_date',
        ),
    ]