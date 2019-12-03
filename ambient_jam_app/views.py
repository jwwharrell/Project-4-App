from rest_framework import viewsets
from .serializers import PlayerSerializer, ThemeSerializer, GuestBookSerializer
from .models import Player, Theme, Guest_Book

class PlayerView(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class ThemeView(viewsets.ModelViewSet):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer

class GuestBookView(viewsets.ModelViewSet):
    queryset = Guest_Book.objects.all()
    serializer_class = GuestBookSerializer