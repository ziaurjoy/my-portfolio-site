from django.db import models

# Create your models here.


class Service(models.Model):
    service_image = models.FileField(upload_to='service')
    service_name = models.CharField(max_length=50)
    service_description = models.TextField()

    def __str__(self):
        return self.service_name