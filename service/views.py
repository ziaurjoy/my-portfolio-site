from django.shortcuts import render, get_object_or_404


from rest_framework import viewsets
from rest_framework.response import Response

from service.models import Service
from service.serializer import ServiceSerializer
# Create your views here.


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()



