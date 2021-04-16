from rest_framework import serializers

from .models import *


class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartData
        fields = "__all__"
        

class ClientReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientReviews
        fields = '__all__'