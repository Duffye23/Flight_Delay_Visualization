from flask import Flask, render_template, request, redirect, url_for
import psycopg2
from flask import jsonify

#Connect to the database
conn = psycopg2.connect(database="Project3_db",
                        user="postgres",
                        password="postgres",
                        host="localhost", port="5432")

#Create a cursor
cur = conn.cursor()

conn.commit()

cur.close()
conn.close()

#Create the Flask App name
app = Flask(__name__)

@app.route('/')
def index():
    #Connect to the database
    conn = psycopg2.connect(database="Project3_db",
                        user="postgres",
                        password="postgres",
                        host="localhost", port="5432"
                        )
    #create the cursor for the webpage
    cur = conn.cursor()

    #Select all flights from the table
    cur.execute('''SELECT * FROM flights LIMIT 50000''')

    #Fetch that data we just selected
    data = cur.fetchall()

    #close the cursor and connection
    cur.close()
    conn.close()

    
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)