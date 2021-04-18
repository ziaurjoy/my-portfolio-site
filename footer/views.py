from django.shortcuts import render

from footer.models import *
from footer.serializer import *

from rest_framework import viewsets
from rest_framework.response import Response

# Create your views here.


class FooterView(viewsets.ViewSet):

    def list(self, request):
        queryset = Footer.objects.all()
        serializer = CourseSerializer(queryset, many=True)
        return Response(serializer.data)

    # def create(self, request):
    #     pass


    def update(self, request, pk=None):
        queryset = Courses.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = CourseSerializer(user)
        return Response(serializer.data)

  
