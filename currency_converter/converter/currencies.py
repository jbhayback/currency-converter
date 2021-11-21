import psycopg2

from utils.db import get_connection


class Currency:
    @classmethod
    def get_currencies(cls):
        currencies = list()
        conn = None
        try:
            conn = get_connection()
            cursor = conn.cursor()
            query = "select * from converter_currencies"

            cursor.execute(query)
            currencies_records = cursor.fetchall()
            for row in currencies_records:
                currencies.append(row[1])

        except (Exception, psycopg2.Error) as error:
            raise error

        finally:
            if conn:
                cursor.close()
                conn.close()

            return currencies
