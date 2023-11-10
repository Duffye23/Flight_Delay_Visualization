from flask import Flask, render_template, request, redirect, url_for
import psycopg2
from flask import jsonify
import json
import pandas as pd
from json import loads, dumps

#Connect to the database
conn = psycopg2.connect(database="Project3_db",
                        user="postgres",
                        password="postgres",
                        host="localhost", port="5432")

#Create a cursor
cur = conn.cursor()

conn.commit()

#Select all flights from the table
cur.execute('''SELECT * FROM flights LIMIT 10000''')

#Fetch that data we just selected
data = cur.fetchall()
data = pd.DataFrame(data)
data = data.drop([0,18,19,20],axis=1)
data.columns = ['airline', 'origin','destination','departure time', 'initial departure time', 'taxi time', 'departure delay', 'air time', 'distance', 'cancelled', 'tail number', 'ICAO Type', 'manufacture year', 'temperature', 'cloud cover', 'active weather', 'id']
result = data.to_json(orient="index")
data = loads(result)
dumps(data, indent=4) 
#print(data)
cur.close()
conn.close()

#Create the Flask App name
app = Flask(__name__)

@app.route('/')
def index():      
    return render_template('index.html')

@app.route('/process_data', methods=['POST'])
def retrieve():
    data = data
    return jsonify(data=data)


if __name__ == '__main__':
    app.run(debug=True)