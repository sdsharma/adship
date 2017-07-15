var campaign_one_chart = dc.scatterPlot("#campaignOne");
var campaign_two_chart = dc.scatterPlot("#campaignTwo");

colors = d3.scale.ordinal().range(["#EB5E28"]);

d3.csv("../data/nba.csv", function(error, data) {
  data.forEach(function(d) {
    d.Day = +d.Day;
    d.Health = +d.Health
  });

  var ndx = crossfilter(data);
  var dimension= ndx.dimension(function(d) {return [+d.Day, +d.Health];});
  var group = dimension.group();

  campaign_one_chart
    .height(300)
    .x(d3.scale.linear().domain([0,10]))
    .y(d3.scale.linear().domain([50, 150]))
    .margins({top: 30, right: 50, bottom: 40, left: 50})
    .brushOn(false)
    .clipPadding(20)
    .yAxisLabel("Health Score")
    .xAxisLabel("Days")
    .dimension(dimension)
    .group(group)
    .colors(colors);

    campaign_one_chart.render();
});

d3.csv("../data/jenner.csv", function(error, data) {
  data.forEach(function(d) {
    d.Day = +d.Day;
    d.Health = +d.Health
  });

  var ndx = crossfilter(data);
  var dimension= ndx.dimension(function(d) {return [+d.Day, +d.Health];});
  var group = dimension.group();

  campaign_two_chart
    .height(300)
    .x(d3.scale.linear().domain([0,14]))
    .y(d3.scale.linear().domain([50, 130]))
    .margins({top: 30, right: 50, bottom: 40, left: 50})
    .brushOn(false)
    .clipPadding(20)
    .yAxisLabel("Health Score")
    .xAxisLabel("Days")
    .dimension(dimension)
    .group(group)
    .colors(colors);

    campaign_two_chart.render();
});
