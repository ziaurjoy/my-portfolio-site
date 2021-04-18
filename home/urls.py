from rest_framework.routers import DefaultRouter
from home.views import *
router = DefaultRouter()
router.register(r'api/view', HomeTitleView, basename='home-title')

urlpatterns = router.urls