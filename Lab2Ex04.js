
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

svg.append("circle")
  .attr("cx",100)
  .attr("cy",100)
  .attr("r", 25)
  .classed('ccircle', true);
  
d3.select("circle")
.on("mouseover", function(event){
  d3.select(this)
  .attr("r", 50)
  .classed('cout', false)
  .classed('cover', true);
})
.on("mouseout", function(){
d3.select(this)
.attr("r", 25)
.classed('cout', true);
});
