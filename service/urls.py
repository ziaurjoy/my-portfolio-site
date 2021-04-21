from rest_framework.routers import DefaultRouter

from service.views import ServiceView

router = DefaultRouter()
router.register(r'api/view', ServiceView, basename='service'),

urlpatterns = router.urls