from django.db import models

# Create your models here.


class ChartData(models.Model):
    technology = models.CharField(max_length=100)
    experience = models.CharField(max_length=100)