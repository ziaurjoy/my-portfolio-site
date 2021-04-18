from django.contrib import admin
from django.urls import path, include

from client_reviews.views import ClientReviewViews


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api/view', ClientReviewViews, basename='client-review')
urlpatterns = router.urls