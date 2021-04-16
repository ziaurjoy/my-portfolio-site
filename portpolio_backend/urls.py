
from django.contrib import admin
from django.urls import path, include
from API.views import *



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('API.urls')),
    path('chartdata/', include('chartdata.urls')),
    path('client/', include('client_reviews.urls')),
    path('contact/', include('contact.urls')),
    # path('client/', include('API.urls')),
    # path('contact',contact_views, name='contact')
]
