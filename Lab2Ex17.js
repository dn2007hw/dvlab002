var svg = d3.select("svg");
var margin = 200;
var width = svg.attr("width") - margin;
var height = svg.attr("height") - margin;

svg
  .append("text")
  .attr("transform", "translate(100,0)")
  .attr("x", 50)
  .attr("y", 50)
  .attr("font-size", "24px")
  .text("Stock Price");
var x = d3.scaleBand().range([0, width]).padding(0.4);
var y = d3.scaleLinear().range([height, 0]);
var myColor;
var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");
d3.csv("data/csvfile01.csv").then(function (data) {
  x.domain(
    data.map(function (d) {
      return d.year;
    })
  );

  y.domain([
    0,
    d3.max(data, function (d) {
      return d.value;
    }),
  ]);
  //setting up a color range
  myColor = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ])
    .range(["blue", "red"]);

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .append("text")
    .attr("y", height - 250)
    .attr("x", width - 100)
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Year");

  g.append("g")
    .call(
      d3
        .axisLeft(y)
        .tickFormat(function (d) {
          return "$" + d;
        })
        .ticks(10)
    )
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-5.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Stock Price");

  g.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut)
    .attr("x", function (d) {
      return x(d.year);
    })
    .attr("y", function (d) {
      return y(d.value);
    })
    .attr("width", x.bandwidth())
    .transition()
    .ease(d3.easeLinear)
    .duration(3000)
    .delay(function (d, i) {
      return i;
    })
    .attr("height", function (d) {
      return height - y(d.value);
    });
});

//mouseover event handler function
function onMouseOver(d, i) {
  d3.select(this).classed("bar", false).attr("fill", myColor(i.value));

  d3.select(this)
    .transition() // adds animation
    .duration(400)
    .attr("width", x.bandwidth() + 5)
    .attr("y", function (d) {
      return y(d.value) - 10;
    })
    .attr("height", function (d) {
      return height - y(d.value) + 10;
    });
  g.append("text")
    .attr("class", "val")
    .attr("x", function () {
      return x(i.year);
    })
    .attr("y", function () {
      return y(i.value) - 15;
    })
    .text(function (d) {
      return "$" + i.value;
    }); // Value of the text
}

//mouseout event handler function
function onMouseOut(d, i) {
  // use the text label class to remove label on mouseout
  d3.select(this).attr("class", "bar");
  d3.select(this)
    .transition() // adds animation
    .duration(400)
    .attr("width", x.bandwidth())
    .attr("y", function (d) {
      return y(i.value);
    })
    .attr("height", function (d) {
      return height - y(i.value);
    });
  d3.selectAll(".val").remove();
}
