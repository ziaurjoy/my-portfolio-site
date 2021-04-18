from django.shortcuts import render

from rest_framework import viewsets

from .Serializer import ClientReviewsSerializer
from .models import ClientReviews
# Create your views here.


class ClientReviewViews(viewsets.ModelViewSet):
    serializer_class = ClientReviewsSerializer
    queryset = ClientReviews.objects.all()