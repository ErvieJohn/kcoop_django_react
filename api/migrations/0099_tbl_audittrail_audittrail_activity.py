# Generated by Django 4.2.2 on 2023-08-04 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0098_rename_audittrail_activity_tbl_audittrail_audittrail_action'),
    ]

    operations = [
        migrations.AddField(
            model_name='tbl_audittrail',
            name='AuditTrail_activity',
            field=models.CharField(blank=True, default=''),
        ),
    ]