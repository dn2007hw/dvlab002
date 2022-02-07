
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .style("border", "1px solid green")
  .append("text");
  
d3.select("svg")
.on("mouseover", function(event){
  d3.select(this)
.select('text')
.attr("x",d3.pointer(event)[0])
.attr("y",d3.pointer(event)[1])
.text("Position:" + d3.pointer(event)[0] + "," + d3.pointer(event)[1]);
});
  

