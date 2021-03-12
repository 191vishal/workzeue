import psycopg2

from psycopg2 import Error

class Connection():

	def __init__(self):
        print('>>> connection')
        self.create_connection('postgres')
        self.db_name = 'agicultures'
        db_check = "SELECT 1 FROM pg_database WHERE datname='%s'" % self.db_name
        self.cr.execute(db_check)
        if not len(self.cr.fetchall()):
            self.cr.execute('CREATE DATABASE %s' % self.db_name)
            print("db created");
            self.connection.close()
            self.create_connection(self.db_name)
            user = '''CREATE TABLE users(
                c_ id SERIAL PRIMARY KEY,
                c_name varchar NOT NULL,
                detail varchar NOT NULL,
                place varchar NOT NULL,
                qty numeric NOT NULL,
                category varchar NOT NULL
            );'''
            self.cr.execute(user);
        else:
            self.create_connection(self.db_name)

    def create_connection(self, db_name):
        self.connection = psycopg2.connect(user="postgres", password="postgres", host="127.0.0.1", port="5432", database=db_name)
        self.connection.autocommit = True
        self.cr = self.connection.cursor()

    def create_user(self, data):
        user = """INSERT INTO crop_detail (c_name, detail, place, qty, category) VALUES ('%s', '%s', '%s', '%s', '%s' )""" % (data['cropname'], data['cropdetail'], data['cropplace'], data['quantity'], data['category']);
        self.cr.execute(user)