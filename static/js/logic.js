// A function to determine the marker size based on the departure delay
function markerSize(departure_delay) {
  return Math.sqrt(departure_delay) * 6000;
}

// Define arrays to hold city markers.
let cityMarkers = [];


var groups = {}; 

for (var i = 0; i < flight_data.length; i++) {
  
  var key = flight_data[i].coordinates[0] + "," + flight_data[i].coordinates[1]; 
  if (groups[key]) {
    groups[key] = [groups[key][0] + flight_data[i].departure_delay, flight_data[i].origin]; 
  } else {
    groups[key] = [flight_data[i].departure_delay, flight_data[i].origin]; 
  }
}

// Loop through coordinates and create the airport markers.
for (var key in groups) { 
  
  var arr = key.split(",");
  
  arr[0] = Number(arr[0]);
  arr[1] = Number(arr[1]);
  
  val = groups[key]
  
  // Setting the marker radius for the Airport
  cityMarkers.push(
  L.circle(arr, {
    stroke: false,
    fillOpacity: 0.65,
    color: "Blue",
    fillColor: "Blue",
    radius: markerSize(val[0])
  }).bindTooltip("<center><font face=\"Calibri\" size=\"4\" color=\"black\">Airport: <b>" + val[1] + "</b></font> <font face=\"Calibri\" size=\"4\" color=\"black\"> <br> Departure Delay: <b>" + val[0] + "</b> minutes</b></font></center>"));
}

// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});



// Create two separate layer groups: one for the city markers and another for the state markers.

let airport = L.layerGroup(cityMarkers);

// Create a baseMaps object.
let baseMaps = {
  "Street Map": street,
  "Topography": topo
};

// Create an overlay object.
let overlayMaps = {
  "Delay Time per Airport": airport
};

// Define a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4.5,
  layers: [street, airport]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);



