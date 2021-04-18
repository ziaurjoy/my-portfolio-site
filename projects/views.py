from django.shortcuts import render,get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from projects.serializer import ProjectSerializer
from projects.models import ProjectTable
# Create your views here.

class ProjectsHomeView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = ProjectTable.objects.all()[:3]



class ProjectAll(viewsets.ViewSet):

    def list(self, request):
        queryset = ProjectTable.objects.all()
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)

    # def create(self, request):
    #     pass

    def retrieve(self, request, pk=None):
        queryset = ProjectTable.objects.all()
        project = get_object_or_404(queryset, pk=pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

