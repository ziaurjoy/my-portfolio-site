

from rest_framework import serializers


from courses.models import *

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = "__all__"

