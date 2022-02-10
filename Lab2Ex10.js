//define svg
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

//add a circe
svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 25)
  .attr("fill", "green");

//mouseover and mouseout event over a circle.
d3.select("circle")
  .on("mouseover", function (event) {
    d3.select(this)
      .transition()
      .ease(d3.easeBounce)
      .duration(1000)
      .attr("r", 50)
      .attr("fill", "aqua");
  })
  .on("mouseout", function () {
    d3.select(this)
      .transition()
      .ease(d3.easeBounce)
      .duration(1000)
      .attr("r", 25)
      .attr("fill", "blue");
  });
