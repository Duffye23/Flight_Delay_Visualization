DROP TABLE IF EXISTS flights;

CREATE TABLE flights (
	"Date" DATE NOT NULL,
	Airline VARCHAR(30),
	ORIGIN VARCHAR (5) NOT NULL,
	Destination VARCHAR (5) NOT NULL,
	"Departure Time" TIME NOT NULL,
	"Initial Departure Time" TIME NOT NULL,
	"Taxi Time" INT NOT NULL,
	"Departure Delay" INT NOT NULL,
	"Air Time" INT NOT NULL,
	Distance INT NOT NULL,
	Cancelled INT NOT NULL,
	"Tail Number" VARCHAR(15) NOT NULL,
	"ICAO Type" VARCHAR(15) NOT NULL,
	"Manufacture Year" INT NOT NULL,
	Temperature NUMERIC NOT NULL,
	"Cloud Cover" INT NOT NULL,
	"Active Weather" Int NOT NULL,
	"Flight Year" INT NOT NULL,
	"Flight Month" INT NOT NULL,
	"Flight Day" INT NOT NULL
);

ALTER TABLE flights
ADD COLUMN "id" SERIAL NOT NULL;

SELECT * FROM flights
WHERE "Departure Time" > '13:00:00';