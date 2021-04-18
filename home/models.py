from django.db import models

# Create your models here.


class HomeETC(models.Model):
    home_title = models.CharField(max_length=100, blank=True, null=True)
    home_subtitle = models.CharField(max_length=150, blank=True, null=True)
    technology_description = models.TextField(blank=True, null=True)
    video_description = models.CharField(max_length=200, blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    total_client = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return self.home_title