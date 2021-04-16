from django.contrib import admin
from django.urls import path, include
from API.views import *


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register(r'chartdata', ChartDataViews, basename='chart-data')
# router.register(r'client/review', ClientReviewViews, basename='client-review')
urlpatterns = router.urls