from django.db import models

# Create your models here.


class ChartData(models.Model):
    x_data = models.CharField(max_length=100)
    y_data = models.CharField(max_length=100)