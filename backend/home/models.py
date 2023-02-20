from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=50,)
    type = models.CharField(max_length=50,)
    price = models.IntegerField()
