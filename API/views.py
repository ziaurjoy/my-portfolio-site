from django.shortcuts import render


from rest_framework import viewsets


from .serializer import *
from .models import *
# Create your views here.

class ChartDataViews(viewsets.ModelViewSet):
    serializer_class = ChartDataSerializer
    queryset = ChartData.objects.all()


class ClientReviewViews(viewsets.ModelViewSet):
    serializer_class = ClientReviewsSerializer
    queryset = ClientReviews.objects.all()


