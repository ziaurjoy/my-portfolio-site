# Generated by Django 3.2 on 2021-04-16 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClientReviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_image', models.ImageField(upload_to='')),
                ('client_title', models.CharField(max_length=100)),
                ('client_description', models.TextField()),
            ],
        ),
    ]