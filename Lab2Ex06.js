// Transition of color over a period of time.
d3.select("body")
  .append("div")
  .style("width", "100px")
  .style("height", "100px")
  .style("background-color", "blue")
  .transition()
  .duration(1000)
  .style("background-color", "red")
  .transition()
  .duration(2000)
  .style("background-color", "green");
