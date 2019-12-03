from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Theme(models.Model):
    name = models.CharField(max_length=100)
    primary = models.CharField(max_length=100)
    secondary = models.CharField(max_length=100)
    alt1 = models.CharField(max_length=100)
    alt2 = models.CharField(max_length=100)
    alt3 = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Guest_Book(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name