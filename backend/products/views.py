#core
import json
#django 
from django.http import JsonResponse, HttpResponse 
from django.views import View
from django.core.serializers import serialize
from django.db.models.query import QuerySet
#models
from products.models import Products
# Create your views here.
class BaseProductView(View):
    def convert_to_json(self, obj):
        if type(obj) == QuerySet:
            return serialize('python', obj)
        else:
            return serialize('python', [obj])[0] 

class ProductsView(BaseProductView):
    #gets a list of products
    def get(self, request):
        products = Products.objects.all()
        return JsonResponse({'products': self.convert_to_json(products) })
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
        product_json  = self.convert_to_json(product)
        return JsonResponse({
            'product':product_json, 
            'message': 'Created product'
            })

# url api/products/<int:product_id>
class ProductView(BaseProductView):
    
    #get a single product
    def get(self, request, product_id):
        product = Products.objects.get(id  = product_id)
        return JsonResponse({ 
            'product': self.convert_to_json(product),
            'message': 'Get a single product'
            })
    def put(self, request, product_id):
        product = Products.objects.get(id  = product_id)
        return JsonResponse({ 
            'message': 'Update a product'
            })
    def delete(self, request, product_id):
        return JsonResponse({ 
            'message': 'delete a product'
            })
    

        
