#core
import json
#django 
from django.http import JsonResponse
from django.core import serializers
#models
from products.models import Products
# Create your views here.

def products_view(request):
    #get all products
    if request.method == 'GET' :
        products = Products.objects.all()
        print(products)
        return JsonResponse({'products': 'hello'})
    #create one product
    if request.method == 'POST':
        product = Products()
        data = json.loads(request.body.decode()) 
        product.name =data['name']
        product.small_desc = data['smallDesc'] 
        product.full_desc = data['fullDesc']
        product.image = data['image']
        product.price = data['price']
        product.save()
        #import pdb; pdb.set_trace()
        product_json  = serializers.serialize('python', [product])[0]
        return JsonResponse({
            'product':product_json, 
            'message': 'Created product'
            })
        
