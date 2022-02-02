from src.database import MongoDB
from .image_service import ImageService

class CreateProductService:
    def __init__(self) -> None:
        self.db = MongoDB().get_database()
        self.image_service = ImageService()
    
    def execute(self, name, price, file) -> dict:
        try:
            collection_products = self.db['products']
            filename = self.image_service.save(file)
            product = {
                "name": name,
                "price": price,
                "img": filename
            }
            product_collection = collection_products.insert_one(product)

            return {
                "id": str(product_collection.inserted_id),
                "name": name,
                "price": price,
                "img": filename
            }
        except Exception as ex:
            print('CreateProductService', ex)
            raise Exception()
        
            
        
