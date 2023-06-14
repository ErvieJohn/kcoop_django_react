# Generated by Django 4.2.2 on 2023-06-14 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('api', '0006_delete_announcements'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announcements',
            fields=[
                ('announcements_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField()),
                ('publishedDate', models.CharField()),
                ('ImgSrc', models.CharField()),
                ('description', models.TextField()),
            ],
        ),
    ]
