from src.database import MongoDB
from .image_service import ImageService

class UpdateProductService:

    def __init__(self) -> None:
        self.db = MongoDB().get_database()
        self.image_service = ImageService()
    
    def execute(self, product_id, name, price, file) -> dict:
        try:
            collection_products = self.db['products']
            product = {}
            for element in collection_products.find({}):
                if product_id == str(element['_id']):
                    product['id'] = element['_id']
                    product['filename'] = element['img']
            
            if name and price and file:
                filename = self.image_service.save(file)

                my_query = {
                    "_id": product['id']
                }

                new_values = {
                    "$set": {
                        "name": name,
                        "price": price,
                        "img": filename
                    }
                }

                updated_element = collection_products.update_one(my_query, new_values)

                if updated_element.matched_count > 0:
                    self.image_service.delete(product['filename'])
                    return new_values
                else:
                    self.image_service.delete(filename)
                    raise Exception('element not found')
            else:
                raise Exception("missing props")
        except Exception as ex:
            print('UpdateProductService', ex)
            raise Exception()