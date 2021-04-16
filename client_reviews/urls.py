from django.contrib import admin
from django.urls import path, include

from client_reviews.views import *


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/review', ClientReviewViews, basename='client-review')
urlpatterns = router.urls