from rest_framework import serializers

from .models import *


class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartData
        fields = "__all__"