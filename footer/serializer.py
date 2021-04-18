from rest_framework import serializers


from footer.models import *

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = "__all__"