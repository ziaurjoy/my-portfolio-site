from django.shortcuts import render

from rest_framework import viewsets

from home.serializer import *
from home.models import HomeETC
# Create your views here.

class HomeTitleView(viewsets.ModelViewSet):
    serializer_class = HomeSerializer
    queryset = HomeETC.objects.all()


