import pymongo

from src import database

class MongoDB:
    def __init__(self) -> None:
        self.__connection_string = 'mongodb://root:dockerAdmin@localhost:27017'
    
    def get_database(self):
        client = pymongo.MongoClient(self.__connection_string)
        database = client['DevMarket']
        return database

