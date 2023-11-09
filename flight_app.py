import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#Set Up the Database
engine = create_engine("C:\Users\evan-\Bootcamp\Project 3\flight_db.csv")

base = automap_base()

base.prepare(autoload_with=engine)

flight = base.classes.flight

#Flask Setup
app = Flask(__name__)

#Flask Routes

@app.route("/")
def welcome():
    """List all available api routes."""
    return(
        f'Available Routes:<br/>'
        f'/api/v1.0/'
    )

if __name__ == '__main__':
    app.run(debug=True)