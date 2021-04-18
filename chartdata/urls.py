from django.contrib import admin
from django.urls import path, include
from chartdata.views import ChartDataViews


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/view', ChartDataViews, basename='chart-data')
urlpatterns = router.urls