from django.db import models

# Create your models here.


class Service(models.Model):
    service_image = models.ImageField()
    service_name = models.CharField(max_length=50)
    service_description = models.TextField()

    def __str__(self):
        return self.service_name


class ClientReviews(models.Model):
    client_image = models.ImageField()
    client_title = models.CharField(max_length=100)
    client_description = models.TextField()

    def __str__(self):
        return self.client_title




class ProjectTable(models.Model):
    image = models.ImageField()
    project_name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=150)
    projectFuture = models.TextField(max_length=50)
    project_live = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.project_name


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name


class Footer(models.Model):
    address = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.IntegerField()
    youtube_link = models.TextField(blank=True, null=True)
    facebook_link = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.address


class HomeETC(models.Model):
    home_title = models.CharField(max_length=100)
    home_subtitle = models.CharField(max_length=150)
    technology_description = models.TextField()
    video_description = models.FileField()
    video_url = models.TextField(blank=True, null=True)
    total_client = models.IntegerField()
    def __str__(self):
        return self.home_title


class ChartData(models.Model):
    x_data = models.CharField(max_length=100)
    y_data = models.CharField(max_length=100)



class Courses(models.Model):
    image = models.ImageField(blank=True, null=True)
    short_title = models.CharField(max_length=100)
    long_title = models.CharField(max_length=200)
    short_description = models.CharField(max_length=100)
    long_description = models.CharField(max_length=200)
    total_lecture = models.IntegerField()
    total_class = models.IntegerField()
    all_skill = models.TextField()
    video = models.FileField()





