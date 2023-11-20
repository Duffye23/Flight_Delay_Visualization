// Creating the map object
let myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 13
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  
  // Assemble the API query URL.
 // let url = 'http://127.0.0.1:5000/process_data';

  // For latitude and longitude
 // let latitude = geoplugin_latitude(); 
 // let longitude = geoplugin_longitude();
  
  // Get the data with d3.
  //d3.json(url).then(function(response) {
  
    // Create a new marker cluster group.
    //let markers = L.markerClusterGroup();
  
    // Loop through the data.
    //for (let i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable.
      //let origin = response[i].origin;
  
      // Check for the location property.
      //if (origin) {
  
        // Add a new marker to the cluster group, and bind a popup.
       // markers.addLayer(L.marker([origin.longitude, origin.latitude])
        //  .bindPopup(response[i].descriptor));
      //}
  
    //}
  
    // Add our marker cluster layer to the map.
   // myMap.addLayer(markers);
  
 // });
  