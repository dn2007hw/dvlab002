var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);
var bar1 = svg
  .append("rect")
  .attr("fill", "blue")
  .attr("x", 100)
  .attr("y", 20)
  .attr("height", 20)
  .attr("width", 10);
var bar2 = svg
  .append("rect")
  .attr("fill", "blue")
  .attr("x", 120)
  .attr("y", 20)
  .attr("height", 20)
  .attr("width", 10);
var bar3 = svg
  .append("rect")
  .attr("fill", "blue")
  .attr("x", 140)
  .attr("y", 20)
  .attr("height", 20)
  .attr("width", 10);

update();
function update() {
  bar1.transition().ease(d3.easeLinear).duration(2000).attr("height", 100);
  bar2
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .delay(2000)
    .attr("height", 100);
  bar3
    .transition()
    .duration(2000)
    .delay(4000)
    .ease(d3.easeLinear)
    .attr("height", 100);
  bar1
    .transition()
    .ease(d3.easeLinear)
    .delay(6000)
    .duration(2000)
    .attr("height", 20);
  bar2
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .delay(6000)
    .attr("height", 20);
  bar3
    .transition()
    .duration(2000)
    .delay(6000)
    .ease(d3.easeLinear)
    .attr("height", 20);
}
