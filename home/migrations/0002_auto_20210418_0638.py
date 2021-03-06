# Generated by Django 3.2 on 2021-04-18 06:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homeetc',
            name='home_subtitle',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='homeetc',
            name='home_title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='homeetc',
            name='technology_description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='homeetc',
            name='total_client',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='homeetc',
            name='video_description',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
