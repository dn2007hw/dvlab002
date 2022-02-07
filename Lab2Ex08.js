d3.select("body")
.append("div")
.style("background-color", "blue")
.style("width", "100px")
.style("height", "100px");
  
d3.select("div")
.on("mouseover", function(event){
  d3.select(this)
  .transition()
  .duration(2000)
  .style("background-color", "aquamarine")
  .style("width", "300px")
  .style("height", "300px");
})
.on("mouseout", function(){
d3.select(this)
.transition()
.duration(2000)
.style("background-color", "blue")
.style("width", "100px")
.style("height", "100px");
});