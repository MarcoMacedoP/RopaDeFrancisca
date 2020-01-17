#core
import json
#django 
from django.http import JsonResponse, HttpResponse 
from django.views import View
from django.core.serializers import serialize

#models
from products.models import Products
# Create your views here.


class ProductsView(View):
    #gets a list of products
    def get(self, request):
        products = Products.objects.all()
        return JsonResponse({'products':serialize('python', products) })
    #create a product
    def post(self, request):
        product = Products()
        data = json.loads(request.body.decode()) 
        product.name =data['name']
        product.small_desc = data['smallDesc'] 
        product.full_desc = data['fullDesc']
        product.image = data['image']
        product.price = data['price']
        product.save()
        product_json  = serialize('python', [product])[0]
        return JsonResponse({
            'product':product_json, 
            'message': 'Created product'
            })
        

