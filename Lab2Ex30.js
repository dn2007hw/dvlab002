var width = 600,
  height = 600;
let csvdata = "data/pop2020.csv";

// setup svg
d3.select("body").append("svg").attr("width", width).attr("height", height);

// generate random colors
const myColor = d3.scaleOrdinal(d3.schemePaired);
var simulation;

//data is imported from csv file and for each record imported, shape creation command is constructed and executed as function.
d3.csv(csvdata, function (data) {
  return data;
}).then(function (data) {
  var nodes = d3.range(data.length).map(function (d) {
    return {
      radius: data[d].Population / 3000,
      Country: data[d].Country,
      Population: data[d].Population,
    };
  });

  simulation = d3
    .forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(5))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius(function (d) {
        return d.radius;
      })
    )
    .on("tick", ticked);

  function ticked() {
    var u = d3
      .select("svg")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("fill", function (d) {
        return myColor(d.radius);
      })
      .attr("r", function (d) {
        return d.radius;
      })
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut);
  }

  function onMouseOver(d, i) {
    d3.select("svg")
      .append("text")
      .attr("class", "mytext")
      .attr("x", i.x)
      .attr("y", i.y)
      .text(i.Country + ":" + i.Population);
  }
  function onMouseOut(d, i) {
    d3.selectAll(".mytext").remove();
  }
});
