//Bar chart for Departure Delay by Airport     
//let dataMap = (flight_data, function(d) { return [d.origin, d.departure_delay]; });
var dataMap1 = (flight_data, function(d) { return [d.origin, d.departure_delay, d.taxi_time]; });

// Sort the data by departure delay in descending order
//flight_data.sort((a, b) => b.departure_delay - a.departure_delay);

// trace object with x and y data
    let trace = {
    x: flight_data.map(object => object.origin),
    y: flight_data.map(object => object.departure_delay),
    name: "Airports",
    type: 'bar'
};

// Apply a title to the layout
    let layout = {
    title: 'Departure Delay by Airport',
    font: {
      family: 'Arial',
      size: 18,
      color: '#7f7f7f'
    },
    xaxis: {
        title: 'Origin'
        
    },
    yaxis: {
        title: 'Departure Delay (Minutes)',
    margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
          }
    },
    showlegend:true,

};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", [trace], layout);

// chart for Taxi time Out and Total flight Delay Correlation by Airport
var xValue = flight_data.map(object => object.origin);

var yValue = flight_data.map(object => object.departure_delay);
var yValue2 = flight_data.map(object => object.taxi_time);

var trace1 = {
  name:"Taxi time Out",
  x: xValue,
  y: yValue,
  type: 'line',
  //text: "yValue.map(String)",
  textposition: 'auto',
  hoverinfo: 'all',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var trace2 = {
  name: "Total Delay time",
  x: xValue,
  y: yValue2,
  type: 'line',
  //text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'all',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var data2 = [trace1,trace2];

var layout1 = {
  title: 'Taxi time Out and Total flight Delay Correlation by Airport',
  font: {
    family: 'Arial',
    size: 18,
    color: '#7f7f7f'
  }
};

Plotly.newPlot('plot2', data2, layout1);
