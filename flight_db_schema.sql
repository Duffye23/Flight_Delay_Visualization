DROP TABLE IF EXISTS flights;

CREATE TABLE flights (
	airline VARCHAR(30),
	origin VARCHAR (5) NOT NULL,
	destination VARCHAR (5) NOT NULL,
	"taxi_time" INT NOT NULL,
	"departure_delay" INT NOT NULL,
	"air_time" INT NOT NULL,
	distance INT NOT NULL,
	cancelled INT NOT NULL,
	"tail_number" VARCHAR(15) NOT NULL,
	"icao_type" VARCHAR(15) NOT NULL,
	"manufacture_year" INT NOT NULL,
	temperature NUMERIC NOT NULL,
	"cloud_cover" INT NOT NULL,
	"active_weather" Int NOT NULL,
	"flight_year" INT NOT NULL,
	"flight_month" INT NOT NULL,
	"flight_day" INT NOT NULL
);

ALTER TABLE flights
ADD COLUMN "id" SERIAL NOT NULL;

SELECT * FROM flights LIMIT 1