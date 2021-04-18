from django.db import models

# Create your models here.


class ProjectTable(models.Model):
    image = models.ImageField()
    project_name = models.CharField(max_length=100)
    short_description = models.CharField(max_length=150)
    projectFuture = models.TextField(max_length=50)
    project_live = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.project_name