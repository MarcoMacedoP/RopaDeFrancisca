from django.db import models

# Class used for products
class Products(models.Model):
    name = models.CharField(max_length = 50)
    small_desc = models.CharField(max_length = 255)
    full_desc = models.TextField()
    image = models.CharField(max_length = 255)
    price = models.DecimalField(max_digits = 10, decimal_places=2)


 