from django.urls import path, include
from .views import signup, loginuser


urlpatterns = [
    path("signup", signup),
    path("login", loginuser),
]
