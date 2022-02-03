from src.database import MongoDB
from .image_service import ImageService

class DeleteProductService:

    def __init__(self) -> None:
        self.db = MongoDB().get_database()
        self.image_service = ImageService()
    
    def execute(self, product_id) -> dict:
        try:
            collection_products = self.db['products']
            product = {}
            for product_mongo in collection_products.find({}):
                if product_id == str(product_mongo['_id']):
                    product['id'] = product_mongo['_id']
                    product['filename'] = product_mongo['img']

            deleted_product = collection_products.delete_one({ "_id": product['id'] })
            

            if deleted_product.deleted_count > 0:
                self.image_service.delete(product['filename'])
                return {
                    "success": "product deleted"
                }
            else:
                raise Exception('product not found')
        except Exception as ex:
            print('DeleteProductService', ex)
            raise Exception()