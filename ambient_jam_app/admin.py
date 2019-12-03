from django.contrib import admin
from .models import Player
from .models import Theme
from .models import Guest_Book

admin.site.register(Player)
admin.site.register(Theme)
admin.site.register(Guest_Book)