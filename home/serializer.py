
from rest_framework import serializers

from home.models import HomeETC

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeETC
        fields = "__all__"

