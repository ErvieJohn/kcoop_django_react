# Generated by Django 4.2.2 on 2023-08-04 00:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0096_tbl_audittrail_audittrail_activity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tbl_audittrail',
            name='AuditTrail_action',
        ),
    ]