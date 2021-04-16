from django.shortcuts import render

from rest_framework import viewsets

from .serializer import *
from chartdata.models import *
# Create your views here.

class ChartDataViews(viewsets.ModelViewSet):
    serializer_class = ChartDataSerializer
    queryset = ChartData.objects.all()
