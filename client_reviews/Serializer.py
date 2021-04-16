
from rest_framework import serializers

from .models import *

class ClientReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientReviews
        fields = '__all__'