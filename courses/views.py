from django.shortcuts import render, get_object_or_404


from rest_framework import viewsets
from rest_framework.response import Response

from courses.models import *
from courses.serializer import *
# Create your views here.


class CourseHome(viewsets.ModelViewSet):

    serializer_class = CourseSerializer
    queryset = Courses.objects.all()[:4]



class CourseAll(viewsets.ViewSet):

    def list(self, request):
        queryset = Courses.objects.all()
        serializer = CourseSerializer(queryset, many=True)
        return Response(serializer.data)

    # def create(self, request):
    #     pass

    def retrieve(self, request, pk=None):
        queryset = Courses.objects.all()
        course = get_object_or_404(queryset, pk=pk)
        serializer = CourseSerializer(course)
        return Response(serializer.data)

    # def update(self, request, pk=None):
    #     pass

    # def partial_update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass
