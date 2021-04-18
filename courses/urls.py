from rest_framework.routers import DefaultRouter

from courses.views import *

router = DefaultRouter()
router.register(r'home', CourseHome, basename='course-home'),
router.register(r'all', CourseAll, basename='course-all'),
urlpatterns = router.urls