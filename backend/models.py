from django.db import models

# Create your models here.
from django.db import models

class MiModelo(models.Model):
    campo1 = models.CharField(max_length=100)
    campo2 = models.IntegerField()
