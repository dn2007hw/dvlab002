d3.select("body").append("h3").text("easeBounce");

// div section transitioned with easeBounce
d3.select("body")
  .append("div")
  .style("width", "500px")
  .style("height", "100px")
  .style("background-color", "aqua")
  .style("transform", "scale(1.0)")
  .transition()
  .ease(d3.easeBounce)
  .duration(3000)
  .style("background-color", "coral")
  .style("transform", "scale(0.5)");

d3.select("body").append("h3").text("easeElastic");

// div section transitioned with easeElastic
d3.select("body")
  .append("div")
  .style("width", "500px")
  .style("height", "100px")
  .style("background-color", "aqua")
  .style("transform", "scale(1.0)")
  .transition()
  .ease(d3.easeElastic)
  .duration(3000)
  .style("background-color", "coral")
  .style("transform", "scale(0.5)");

d3.select("body").append("h3").text("easeBack");

// div section transitioned with easeBack
d3.select("body")
  .append("div")
  .style("width", "500px")
  .style("height", "100px")
  .style("background-color", "aqua")
  .style("transform", "scale(1.0)")
  .transition()
  .ease(d3.easeBack)
  .duration(3000)
  .style("background-color", "coral")
  .style("transform", "scale(0.5)");
