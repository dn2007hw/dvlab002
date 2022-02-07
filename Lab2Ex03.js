d3.select('body')
.append('div')
.style('width', '100px')
.style('height', '20px')
.style('border-style', 'solid')
.style('border-color', 'white')
.style('background-color', 'green');

d3.select('body')
.append('div')
.style('width', '100px')
.style('height', '20px')
.style('border-style', 'solid')
.style('border-color', 'white')
.style('background-color', 'cyan');

d3.select('body')
.append('div')
.style('width', '100px')
.style('height', '20px')
.style('border-style', 'solid')
.style('border-color', 'white')
.style('background-color', 'magenta');

d3.select('body')
.append('div')
.style('width', '100px')
.style('height', '20px')
.style('border-style', 'solid')
.style('border-color', 'white')
.style('background-color', 'aquamarine');

d3.selectAll("div")
.on("mouseover", function(event){
  d3.select(this)
  .style('width', '150px')
.style('height', '30px')
  .style('border-style', 'inset')
  .style('border-color', 'white')
.style("background-color", "orange");
})
.on("mouseout", function(){
d3.select(this)
.style('width', '175px')
.style('height', '20px')
.style('border-style', 'outset')
.style('border-color', 'cyan')
.style("background-color", "steelblue")
});