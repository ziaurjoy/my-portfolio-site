from django.db import models

# Create your models here.


class Footer(models.Model):
    address = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.IntegerField()
    youtube_link = models.TextField(blank=True, null=True)
    facebook_link = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.address