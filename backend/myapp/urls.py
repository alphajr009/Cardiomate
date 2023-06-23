from django.urls import path, include
from .views import signup


urlpatterns = [
    path("signup", signup),
]
