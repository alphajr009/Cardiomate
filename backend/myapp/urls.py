from django.urls import path, include
from .views import signup, loginuser, make_prediction


urlpatterns = [
    path("signup", signup),
    path("login", loginuser),
    path("makeprediction", make_prediction),
]
