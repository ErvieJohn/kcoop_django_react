# Generated by Django 4.2.2 on 2023-08-02 08:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0088_tbl_audittrail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tbl_audittrail',
            old_name='AuditTrail_activity',
            new_name='AuditTrail_action',
        ),
    ]
