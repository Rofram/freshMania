from flask import Flask, Response, request
from flask_cors import CORS
from src.infra.http.controllers import ProductController

app = Flask(__name__, static_folder='uploads')
CORS(app)
product_controller = ProductController()

@app.route('/api/products', methods=["POST", "GET", "PUT", "DELETE"])
def products():
    if request.method == "POST":
        return product_controller.create(request, Response)
    elif request.method == "GET":
        return product_controller.show(request, Response)
    elif request.method == "PUT":
        return product_controller.update(request, Response)
    elif request.method == "DELETE":
        return product_controller.delete(request, Response)
    
    

if __name__ == "__main__":
    app.run()
