import os
import psycopg2

def get_connection():
    connection = psycopg2.connect(user=os.getenv('DB_USER'),
                            password=os.getenv('DB_PASSWORD'),
                            host=os.getenv('DB_HOST'),
                            port=os.getenv('DB_PORT'),
                            database=os.getenv('DB_NAME'))

    return connection