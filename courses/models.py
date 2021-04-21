from django.db import models

# Create your models here.


class Courses(models.Model):
    image = models.ImageField(upload_to='course', blank=True, null=True)
    short_title = models.CharField(max_length=100)
    long_title = models.CharField(max_length=200)
    short_description = models.CharField(max_length=100)
    long_description = models.CharField(max_length=200)
    total_lecture = models.IntegerField()
    total_class = models.IntegerField()
    all_skill = models.TextField()
    video = models.FileField()

    def __str__(self):
        return self.short_title