
from django.contrib import admin
from django.urls import path, include
from API.views import *


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'chartdata', ChartDataViews, basename='chart-data')
router.register(r'client/review', ClientReviewViews, basename='client-review')
urlpatterns = router.urls


# urlpatterns = [
#     path('admin/', admin.site.urls),
#     # path('/',include(API.urls)
#     # path('chartdata', ChartDataViews.as_views(), name='chart-data')
# ]
