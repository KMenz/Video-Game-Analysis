
function buildCharts(region) {
console.log("Hello world")
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/sales/${region}`).then(function(selection) {
    console.log(selection);

    const platform = selection.platform;
    const year_release = selection.year_release;
    const genre = selection.genre;
    const publisher = selection.publisher;
    const region = selection.region;
    const critic_score = selection.critic_score;
    const user_score = selection.user_score;
    const rating = selection.rating;


    // Build a Bar Chart for genre
    var barData = [{
      x: genre,
      y: region,
      type: "bar"
    }];
    
    var barLayout = {
      title: 'Sales by Genre',
      margin: {t: 0}
    };
    
    Plotly.newPlot("bar", barData, barLayout);
  });
}


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/region").then((regionName) => {
    regionName.forEach((region) => {
      selector
        .append("option")
        .text(region)
        .property("value", region);
    });
    
    // Use the first sample from the list to build the initial plots --MAYBE MAKE GLOBAL SALES FIRST OPTION?
    const firstRegion = regionName[4];
    buildCharts(firstRegion);
  });
}

function optionChanged(newRegion) {
  // Fetch new data each time a new sample is selected
  buildCharts(newRegion);
}

// Initialize the dashboard
init();
