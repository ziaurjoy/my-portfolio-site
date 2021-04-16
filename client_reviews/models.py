from django.db import models

# Create your models here.



class ClientReviews(models.Model):
    client_image = models.ImageField()
    client_title = models.CharField(max_length=100)
    client_description = models.TextField()

    def __str__(self):
        return self.client_title