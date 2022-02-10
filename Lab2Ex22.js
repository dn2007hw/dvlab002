// create 3 data_set
const data1 = [
  { group: "A", value: 5 },
  { group: "B", value: 20 },
  { group: "C", value: 9 },
  { group: "D", value: 19 },
];
const data2 = [
  { group: "A", value: 10 },
  { group: "B", value: 2 },
  { group: "D", value: 9 },
];
const data3 = [
  { group: "A", value: 1 },
  { group: "B", value: 10 },
  { group: "C", value: 20 },
  { group: "E", value: 50 },
];
// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 70, left: 60 };
const width = 460 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;
var barclass;
var u;
// append the svg object to the body of the page
var svg = d3
  .select("body")
  .append("div")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X axis
var x = d3
  .scaleBand()
  .range([0, width])
  .domain(
    data1.map(function (d) {
      return d.group;
    })
  )
  .padding(0.2);

svg
  .append("g")
  .attr("class", "myXBaxis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

svg
  .append("g")
  .attr("class", "myXTaxis")
  .attr("transform", "translate(0,0)")
  .call(d3.axisTop(x));

// Add Y axis
var y = d3.scaleLinear().range([height, 0]);
//
y.domain([
  0,
  d3.max([
    d3.max(data1, function (d) {
      return d.value;
    }),
    d3.max(data2, function (d) {
      return d.value;
    }),
    d3.max(data3, function (d) {
      return d.value;
    }),
  ]),
]);

svg.append("g").attr("class", "myYLaxis").call(d3.axisLeft(y));

svg
  .append("g")
  .attr("class", "myYRaxis")
  .attr("transform", "translate(" + width + ",0)")
  .call(d3.axisRight(y));

// A function that create / update the plot for a given variable:
function update(data, barclass) {
  x = d3
    .scaleBand()
    .range([0, width])
    .domain(
      data.map(function (d) {
        return d.group;
      })
    )
    .padding(0.2);

  svg
    .select(".myXBaxis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  svg
    .select(".myXTaxis")
    .attr("transform", "translate(0,0)")
    .call(d3.axisTop(x));

  y = d3.scaleLinear().range([height, 0]);
  y.domain([
    0,
    d3.max(data, function (d) {
      return d.value;
    }),
  ]);

  svg.select(".myYLaxis").call(d3.axisLeft(y));

  svg
    .select(".myYRaxis")
    .attr("transform", "translate(" + width + ",0)")
    .call(d3.axisRight(y));

  u = svg.selectAll("rect").data(data);
  u.enter()
    .append("rect")
    .merge(u)
    .attr("class", barclass)
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    .transition()
    .duration(1000)
    .style("opacity", 1)
    .attr("x", function (d) {
      return x(d.group);
    })
    .attr("y", function (d) {
      return y(d.value);
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(d.value);
    });

  u.exit().transition().duration(2000).style("opacity", 0).remove();
}

function drawbar1() {
  update(data1, "bar1");
}
function drawbar2() {
  update(data2, "bar2");
}
function drawbar3() {
  update(data3, "bar3");
}

//mouseover event handler function
function onMouseOver(d, i) {
  svg
    .append("text")
    .attr("class", "val")
    .attr("x", function () {
      return x(i.group) + x.bandwidth() / 2;
    })
    .attr("y", function () {
      return y(i.value) - 2;
    })
    .text(function (d) {
      return i.value;
    });
}

//mouseout event handler function
function onMouseOut(d, i) {
  d3.selectAll(".val").remove();
}

// Initialize the plot with the first dataset
drawbar1();
