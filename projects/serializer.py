from rest_framework import serializers

from projects.models import ProjectTable

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTable
        fields = '__all__'
