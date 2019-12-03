from django.conf.urls import include
from django.urls import re_path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('player', views.PlayerView)
router.register('theme', views.ThemeView)
router.register('guest_book', views.GuestBookView)

urlpatterns = [
    re_path('', include(router.urls))
]