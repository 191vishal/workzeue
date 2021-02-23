import psycopg2
from psycopg2 import Error
 
connection = psycopg2.connect(user="postgres",password="postgres",host="127.0.0.1",port="5432",database="Agriculture")
cursor=connection.cursor()
create_table_query='''CREATE TABLE Crop
    (farmer_Id INT FOREIGN KEY  NOT NULL,
     crop_name TEXT NOT NULL,
     crop_detail TEXT  NOT NULL,
     place TEXT NOT NULL,
     expected_qty NUMERIC NOT NULL,
     category TEXT NOT NULL,
     state 	TEXT NOT NULL) ;'''
cursor.execute(create_table_query)
connection.commit()

cursor.close()
connection.close()
print("postgresql connection is closed") 
