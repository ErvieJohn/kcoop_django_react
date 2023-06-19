# Generated by Django 4.2.2 on 2023-06-15 07:04

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_remove_tbl_satalliteoffices_satalliteofficestype_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TBL_PublicationsType',
            fields=[
                ('Publicationstype_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('Publicationstype_name', models.CharField()),
                ('Publicationstype_url', models.CharField()),
            ],
        ),
        migrations.CreateModel(
            name='TBL_SatalliteOfficesType',
            fields=[
                ('SatalliteOfficestype_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('SatalliteOfficestype_name', models.CharField()),
                ('SatalliteOfficestype_url', models.CharField()),
            ],
        ),
        migrations.CreateModel(
            name='TBL_StoriesType',
            fields=[
                ('Storiestype_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('Storiestype_name', models.CharField()),
                ('Storiestype_url', models.CharField()),
            ],
        ),
        migrations.CreateModel(
            name='TBL_Stories',
            fields=[
                ('Stories_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('Stories_title', models.CharField()),
                ('Stories_date', models.CharField()),
                ('Stories_content', models.CharField(blank=True, default='')),
                ('Stories_image', models.CharField()),
                ('Stories_ytlink', models.CharField()),
                ('Storiestype_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tbl_storiestype')),
            ],
        ),
        migrations.CreateModel(
            name='TBL_SatalliteOffices',
            fields=[
                ('SatalliteOffices_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('SatalliteOffices_title', models.CharField()),
                ('SatalliteOffices_logo', models.CharField()),
                ('SatalliteOffices_content', models.CharField(blank=True, default='')),
                ('SatalliteOffices_image', models.CharField()),
                ('SatalliteOfficestype_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tbl_satalliteofficestype')),
            ],
        ),
        migrations.CreateModel(
            name='TBL_Publications',
            fields=[
                ('Publications_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('Publications_title', models.CharField()),
                ('Publications_content', models.CharField(blank=True, default='')),
                ('Publications_image', models.CharField()),
                ('Publicationstype_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.tbl_publicationstype')),
            ],
        ),
    ]