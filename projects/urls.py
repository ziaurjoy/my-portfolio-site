
from rest_framework.routers import DefaultRouter

from projects.views import *

router = DefaultRouter()
router.register(r'api/home/view', ProjectsHomeView, basename='projects-home')
router.register(r'api/home/all', ProjectAll, basename='projects-all')
urlpatterns = router.urls