from flask import Flask, render_template, request, redirect, url_for
import psycopg2

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
    cur.execute('''SELECT * FROM flights''')

    #Fetch that data we just selected
    data = cur.fetchall()

    #close the cursor and connection
    cur.close()
    conn.close()

    return render_template('index.html', data=data)
"""
#Allow us to create
@app.route('/create', methods=['POST'])
def create():
    conn = psycopg2.connect(database="Project3_db",
                        user="postgres",
                        password="postgres"
                        host="localhost", port="5432"
                        )
    
    cur = conn.cursor()

    #Get the data from the form
    date = request.form['Date']
    airline = request.form['airline']
    origin = request.form['origin']
    destination = request.form['destination']
    departure_time = request.form['Departure Time']
    initial_departure_time = request.form['Initial Departure Time']
    taxi_time = request.form['Taxi Time']
    departure_delay = request.form['Departure Delay']
    air_time = request.form['Air Time']
    distance = request.form['distance']
    cancelled = request.form['cancelled']
    tail_number = request.form['Tail Number']
    icao_type = request.form['ICAO Type']
    manufacture_year = request.form['Manufacture Year']
    temperature = request.form['temperature']
    cloud_cover = request.form['Cloud Cover']
    active_weather = request.form['Active Weather']
    flight_year = request.form['Flight Year']
    flight_month = request.form['Flight Month']
    flight_day = request.form['Flight Day']
    flight_id = request.form['id']

    #Update data in table
    cur.execute(
        '''UPDATE '''
    )"""

if __name__ == '__main__':
    app.run(debug=True)