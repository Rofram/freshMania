from flask import Request, Response
import json
from src.services import CreateProductService, ImageService, ListProductService, UpdateProductService, DeleteProductService


class ProductController:

    def __init__(self) -> None:
        self.create_service = CreateProductService()
        self.image_service = ImageService()
        self.list_service = ListProductService()
        self.update_service = UpdateProductService()
        self.delete_service = DeleteProductService()

    def create(self, req: Request, res: Response) -> dict:
        try:
            name = req.form["name"]
            price = req.form["price"]
            file = req.files['image']

            product = self.create_service.execute(name, price, file)

            return res(
                response=json.dumps(product),
                status=201,
                mimetype='application/json'
            )
        except Exception as ex:
            print('ProductControler Create', ex)
            return res(
                response=json.dumps({
                    "error": "Cannot create product check your inputs"
                }), 
                status=400, 
                mimetype='application/json'
                )

    def show(self, req: Request, res: Response) -> dict:
        try:
            products = self.list_service.execute()

            return products
        except Exception as ex:
            print('ProductController Show', ex)
            return res(
                response=json.dumps({
                    "error": "server error"
                }),
                status=500, 
                mimetype='application/json'
                )

    def update(self, req: Request, res: Response) -> dict:
        try:
            product_id = req.args.get('id')
            name = req.form["name"]
            price = req.form["price"]
            file = req.files['image']

            product = self.update_service.execute(product_id, name, price, file)

            return product
        except Exception as ex:
            print('ProductController Update', ex)
            return res(
                response=json.dumps({
                    "error": "product not found"
                }), 
                status=404, 
                mimetype='application/json'
                )

    def delete(self, req: Request, res: Response) -> dict:
        try:
            product_id = req.args.get('id')
            deleted_product = self.delete_service.execute(product_id)
            return deleted_product
        except Exception as ex:
            print('ProductController Delete', ex)
            return res(
                response=json.dumps({
                    "error": "product not found"
                }), 
                status=404, 
                mimetype='application/json'
                )
