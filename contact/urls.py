
from django.contrib import admin
from django.urls import path, include

from contact.views import contact_views


urlpatterns = [
   path('api/view', contact_views, name='contact-message')
]
