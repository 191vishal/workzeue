import psycopg2
from psycopg2 import Error
 
connection = psycopg2.connect(user="postgres",password="postgres",host="127.0.0.1",port="5432",database="Agriculture")
cursor=connection.cursor()
create_table_query='''CREATE TABLE book (
 b_id integer,
 u_id integer,
 c_id integer,
 st_id integer,
 qty  numeric,
 date date,
 state varchar(50),
 PRIMARY KEY(b_id),
 FOREIGN KEY(u_id) REFERENCES users(u_id),
 FOREIGN KEY(st_id) REFERENCES crop_detail(c_id),
 FOREIGN KEY(st_id) REFERENCES crop_stage_detail(st_id)
 
);'''
cursor.execute(create_table_query)
connection.commit()

cursor.close()
connection.close()
print("postgresql connection is sucess") 
