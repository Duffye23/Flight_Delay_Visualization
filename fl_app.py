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
cur.execute('''SELECT * FROM flights LIMIT 5000''')

#Fetch that data we just selectedS
data = cur.fetchall()
data = pd.DataFrame(data)

data.columns = ['airline', 'origin','destination','taxi_time', 'departure_delay', 'air_time',
                 'distance', 'cancelled','tail_number', 'icao_ type', 'manufacture_year', 
                 'temperature', 'cloud_cover', 'active_weather', 'flight_year','flight_month','flight_day', 'id']
#print(data)
result = data.to_json(orient="records")
#data = loads(result)
#dumps(data, indent=4) 
#print(data)
cur.close()
conn.close()

#Create the Flask App name
app = Flask(__name__)

@app.route('/')
def index():      
  return render_template('index.html', data=result)

@app.route('/process_data')
def flight_dict():
    flight_data = []
    
    for row in data.itertuples(index=False):
        airline, origin, destination, taxi_time, departure_delay, air_time, distance,\
        cancelled, tail_number, icao_type, manufacture_year, temperature, cloud_cover,\
        active_weather,flight_year, flight_month, flight_day, id = row
        flight_data_dict = {}
        flight_data_dict['airline'] = airline
        flight_data_dict['origin'] = origin
        flight_data_dict['destination'] = destination
        flight_data_dict['taxi_time'] = taxi_time
        flight_data_dict['departure_delay'] = departure_delay
        flight_data_dict['air_time'] = air_time
        flight_data_dict['distance'] = distance
        flight_data_dict['cancelled'] = cancelled
        flight_data_dict['tail_number'] = tail_number
        flight_data_dict['icao_type'] = icao_type
        flight_data_dict['manufacture_year'] = manufacture_year
        flight_data_dict['temperature'] = temperature
        flight_data_dict['cloud_cover'] = cloud_cover
        flight_data_dict['active_weather'] = active_weather
        flight_data_dict['flight_year'] = flight_year
        flight_data_dict['flight_month'] = flight_month
        flight_data_dict['flight_day'] = flight_day
        flight_data_dict['id'] = id
        flight_data.append(flight_data_dict)

    return jsonify(flight_data)


if __name__ == '__main__':
    app.run(debug=True)