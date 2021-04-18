
from django.contrib import admin
from django.urls import path, include




urlpatterns = [
    path('admin/', admin.site.urls),

    path('chartdata/', include('chartdata.urls')),
    path('client/', include('client_reviews.urls')),
    path('contact/', include('contact.urls')),
    path('course/', include('courses.urls')),
    path('project/', include('projects.urls')),
    path('footer/', include('footer.urls')),
    path('home/', include('home.urls')),
    # path('client/', include('API.urls')),
    # path('contact',contact_views, name='contact')
]
