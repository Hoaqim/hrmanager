from django.db import models
from django.conf import settings
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY

class Employee(models.Model):
    name = models.CharField(max_length=70)
    email = models.EmailField(max_length=50, unique=True)
    position = models.CharField(max_length=30)
    salary = models.CharField(max_length=10)
    bank_account = models.CharField(max_length=26, unique=True)

