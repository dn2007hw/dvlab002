const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 500);

svg.append("text")
  .attr("x",100)
  .attr("y",100)
  .text("Transitions / Easing - using easeBounce")
  .attr("font-size", 25)
  .attr("stroke", "blue");
  
d3.select("text")
.on("mouseover", function(event){
  d3.select(this)
    .transition()
    .ease(d3.easeBounce)
    .duration(1000)
    .attr("font-size", 50)
    .attr("fill", "aqua")
    .attr("stroke", "aqua");
})
.on("mouseout", function(){
d3.select(this)
    .transition()
    .ease(d3.easeBounce)
    .duration(1000)
    .attr("font-size", 25)
    .attr("fill", "blue")
    .attr("stroke", "blue");
});

