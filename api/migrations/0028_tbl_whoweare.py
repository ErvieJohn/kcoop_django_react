# Generated by Django 4.2.2 on 2023-06-16 01:21

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_delete_tbl_whoweare'),
    ]

    operations = [
        migrations.CreateModel(
            name='TBL_WhoWeAre',
            fields=[
                ('WhoWeAre_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('WhoWeAre_title', models.CharField()),
                ('WhoWeAre_content', models.TextField(blank=True, default='')),
                ('WhoWeAre_image', models.CharField(blank=True, default='/static/media/no_img.jpg')),
                ('WhoWeAretype_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tbl_whowearetype')),
            ],
        ),
    ]
