from rest_framework import serializers

from.models import Player, Theme, Guest_Book

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('name',)

class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = ('name', 'primary', 'secondary', 'alt1', 'alt2', 'alt3')

class GuestBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest_Book
        fields = ('name',)