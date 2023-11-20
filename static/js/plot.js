//Bar chart for Departure Delay by Airport     
var dataMap1 = (flight_data, function(d) { return [d.origin, d.departure_delay, d.taxi_time]; });

// Calculate the total delay time for each airport
let total_delay_time = flight_data.reduce((acc, cur) => {
  if (acc[cur.origin]) {
    acc[cur.origin] += cur.departure_delay;
  } else {
    acc[cur.origin] = cur.departure_delay;
  }
  return acc;
}, {});

// trace object with x and y data
    let trace = {
    x: Object.keys(total_delay_time),
    y: Object.values(total_delay_time),
    name: "Airports",
    type: 'bar',
    hovertemplate: 'Total Delay Time: %{y} min<br><extra></extra>'
};

// Apply a title to the layout
let layout = {
  'title': {
      'text': 'Departure Delay by Airport',
      'font': {
          'family': 'Calibri',
          'size': 40,
          'color': 'darkblue',
          'decoration': 'underline',
          'weight': 'bold'
      },
  },
  'font': {
      'family': 'Calibri',
      'size': 20,
      'color': 'black',
  },
  'xaxis': {
      'title': 'Origin',
      'type': 'category',
      'categoryorder': 'total descending',
  },
  'yaxis': {
      'title': 'Departure Delay (Min)',
      'margin': {
          'l': 100,
          'r': 100,
          't': 100,
          'b': 100,
      },      
  },
  'showlegend': true,
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", [trace], layout);

//#############################################//

// chart for Taxi time Out and Total flight Delay Correlation by Airport
let total_taxi_time = flight_data.reduce((acc, cur) => {
  if (acc[cur.origin]) {
    acc[cur.origin] += cur.departure_delay;
  } else {
    acc[cur.origin] = cur.taxi_time;
  }
  return acc;
}, {});

var trace1 = {
  name:"Total Delay Time",
  x: Object.keys(total_delay_time),
  y: Object.values(total_delay_time),
  type: 'bar',
  //text: "yValue.map(String)",
  textposition: 'auto',
  hoverinfo: 'all',
  opacity: 0.5,
  marker: {
    color: 'navyblue',
    line: {
      color: 'black',
      width: 1.5
    }
  }
};

var trace2 = {
  name: "Total Taxi Time Out",
  x: Object.keys(total_taxi_time),
  y: Object.values(total_taxi_time),
  type: 'bar',
  //text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'all',
  marker: {
    color: 'lightblue',
    line: {
      color: 'black',
      width: 1.5
    }
  }
};

var data2 = [trace1,trace2];

var layout1 = {
  'title': {
    'text': 'Taxi time Out/Total flight Delay by Airport',
    'font': {
        'family': 'Calibri',
        'size': 40,
        'color': 'darkblue',
        'decoration': 'underline',
        'weight': 'bold'
    },
  },
  'font': {
      'family': 'Calibri',
      'size': 20,
      'color': 'black',
  },
  xaxis: {
    title: 'Origin',
    type: 'category',
    categoryorder: 'total descending'
    
  },
  yaxis: {
    title: 'Minutes',    
  },
};

Plotly.newPlot('plot2', data2, layout1);