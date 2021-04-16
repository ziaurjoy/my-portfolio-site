
from django.contrib import admin
from django.urls import path, include

from contact.views import *


urlpatterns = [
   path('api/view', contact_views, name='contact-message')
]
