// create 3 data_set
const data1 = [
  {x: 0, y: 0},
  {x: 5, y: 5},
  {x: 10, y: 100},
  {x: 22, y: 20}
  ];
  const data2 = [
    {x: 0, y: 0},
    {x: 15, y: 5},
    {x: 20, y: 10},
    {x: 5, y: 10},
    {x: 20, y: 20},
    {x: 0, y: 0}
    ];
  const data3 = [
    {x: 50, y: 0},
    {x: 15, y: 5},
    {x: 10, y: 10},
    {x: 50, y: 10},
    {x: 10, y: 200}
  ];
  // set the dimensions and margins of the graph
  const margin = {top: 50, right: 50, bottom: 50, left: 50};
  const width = 600 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const xSize = 600;
  const ySize = 600;
  const xMax = xSize - margin.right * 2;
  const yMax = ySize - margin.bottom * 2;

  var lineClass;
  var u;

  // append the svg object to the body of the page
  var svg = d3.select('body')
  .append('div')
  .append("svg")
  .attr("width", xSize)
  .attr("height", ySize)
  .append("g")
  .attr("transform",
  "translate(" + margin.left + "," + margin.top + ")");
  
  // A function that create / update the plot for a given variable:
  function drawLine(data,lineClass) {
   
    svg.selectAll("*").remove(); 

    // X axis
  var x = d3.scaleLinear()
  .range([ 0, xMax ])
  .domain([
    0,
    d3.max(data, function (d) {
      return d.x;
    })
  ]);
  
  svg.append("g")
  .attr("class", "myXBaxis")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

  svg.append("g")
  .attr("class", "myXTaxis")
  .attr("transform", "translate(0,0)")
  .call(d3.axisTop(x));

  // Add Y axis
 
  var y = d3.scaleLinear()
  .range([ height, 0])
  .domain([
  0,
  d3.max(data, function (d) {
    return d.y;
  })
]);

svg.append("g")
.attr("class", "myYLaxis")
.call(d3.axisLeft(y));

  svg.append("g")
  .attr("class", "myYRaxis")
  .attr("transform", "translate(" + xMax + ",0)")
  .call(d3.axisRight(y));

  
svg.append("path")
  .datum(data)
  .attr("class", lineClass)
  .transition()
  .duration(3000)
  .attr("d", d3.line() 
  .x(function(d) { return x(d.x); })
  .y(function(d) { return y(d.y); })
  );

  }

  function drawLine1() {
    drawLine(data1,"lineClass1");
  }
  function drawLine2() {
    drawLine(data2,"lineClass2");
    }
  function drawLine3() {
      drawLine(data3,"lineClass3");
    }

  // Initialize the plot with the first dataset
  drawLine2();