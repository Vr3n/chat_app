from django.urls import path, re_path
from .views import index, room

urlpatterns = [
    path('', index, name="home"),
    re_path(r'^(?P<room_name>[^/]+)/$', room, name="room"),
]