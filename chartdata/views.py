from django.shortcuts import render

from rest_framework import viewsets

from .serializer import ChartDataSerializer
from chartdata.models import ChartData
# Create your views here.

class ChartDataViews(viewsets.ModelViewSet):
    serializer_class = ChartDataSerializer
    queryset = ChartData.objects.all()
