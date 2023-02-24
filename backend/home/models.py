from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=50,blank=True,)
    type = models.CharField(max_length=50,blank=True,)
    birth_date = models.DateField(null=True,blank=True,)
class PetOwner(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    email = models.EmailField(max_length=254,)
