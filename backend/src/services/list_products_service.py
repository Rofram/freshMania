from src.database import MongoDB

class ListProductService:

    def __init__(self) -> None:
        self.db = MongoDB().get_database()
    
    def execute(self) -> dict:
        try:
            collection_products = self.db['products']
            cursor = collection_products.find({})
            products = []
            for product in cursor:
                products.append({
                    "id": str(product['_id']),
                    "name": product['name'],
                    "price": product['price'],
                    "img": product['img']
                    })
            return { "products": products }
        except Exception as ex:
            print('ListProductService', ex)
            raise Exception()


