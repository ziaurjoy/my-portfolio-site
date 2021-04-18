from rest_framework.routers import DefaultRouter

from footer.views import *

router = DefaultRouter()
router.register(r'api/view', FooterView, basename='footer'),

urlpatterns = router.urls