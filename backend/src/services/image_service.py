from flask import Request
import uuid
import os

class ImageService:

    def __init__(self) -> None:
        self.uploads_folder = './uploads'
        self.allow_extensions = {'png', 'jpg', 'jpeg'}
    
    def save(self, file) -> str:
        try:
            filename = file.filename
            if self.allowed_file(filename):
                new_filename = self.rename_file(filename)
                file.save(os.path.join(self.uploads_folder, new_filename))
                return new_filename
            else:
                raise ValueError("image extension not allowed")
        except Exception as ex:
            print('ImageService', ex)
            raise Exception()
    
    def allowed_file(self, filename) -> bool:
        file_extension = filename.rsplit('.', 1)[1].lower()
        return '.' in filename and file_extension in self.allow_extensions
    
    def rename_file(self, filename):
        file_extension = filename.rsplit('.', 1)[1].lower()
        new_name = f"{str(uuid.uuid4())}-product.{file_extension}"
        return new_name

    
    def delete(self, filename) -> None:
        try:
            os.remove(os.path.join(self.uploads_folder, filename))
        except Exception as ex:
            print('ImageService', ex)
            raise Exception()
        
        
        
