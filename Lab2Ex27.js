var dataset = {
  apples: [5000, 4000, 3000, 2000, 1000],
  oranges: [1000, 1000, 1000, 1000, 1000],
  grapes: [1000, 2000, 3000, 4000, 5000],
};
var width = 460,
  height = 300,
  radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal().range(d3.schemeSet3);
var pie = d3.pie().sort(null);
var arc = d3
  .arc()
  .innerRadius(radius - 100)
  .outerRadius(radius - 50);
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  function drawPie(data) {
  svg.selectAll("*").remove();
  var path = svg
    .selectAll("path")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", function (d, i) {
      return color(i);
    })
    .attr("d", arc)
    .transition()
    .ease(d3.easeElastic)
    .duration(6000)
    .attrTween("d", function (d) {
      var i = d3.interpolate(d.endAngle, d.startAngle);
      return function (t) {
        d.startAngle = i(t);
        return arc(d);
      };
    });
}
function drawApple() {
  drawPie(dataset.apples);
}
function drawOrange() {
  drawPie(dataset.oranges);
}
function drawGrape() {
  drawPie(dataset.grapes);
}
