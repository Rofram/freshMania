from flask import Request
import uuid
import os

class ImageService:

    def __init__(self) -> None:
        self.uploads_folder = './uploads'
        self.allow_extensions = {'png', 'jpg', 'jpeg'}
    
    def save(self, file) -> str:
        try:
            if self.allowed_file(file.filename):
                new_filename = str(uuid.uuid4()) + file.filename
                file.save(os.path.join(self.uploads_folder, new_filename))
                return new_filename
            else:
                raise ValueError("image extension not allowed")
        except Exception as ex:
            print('ImageService', ex)
            raise Exception()
    
    def allowed_file(self, filename) -> bool:
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in self.allow_extensions
    
    def delete(self, filename) -> None:
        try:
            os.remove(os.path.join(self.uploads_folder, filename))
        except Exception as ex:
            print('ImageService', ex)
            raise Exception()
        
        
        
