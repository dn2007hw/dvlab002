var width = 1200,
  height = 600;
let csvdata = "data/regdata.csv";

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
      Country: data[d].id,
      Population: data[d].Population,
      Region: data[d].Region,
    };
  });

  var regionArray = [];
  for (x in nodes) {
    regionArray[nodes[x].Country] = nodes[x];
  }
  var links = d3.range(nodes.length).map(function (d) {
    return {
      source: regionArray[nodes[d].Region],
      target: nodes[d],
    };
  });

  // Initialize the links
  var link = d3
    .select("svg")
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .style("stroke", "#aaa");

  simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink() // This force provides links between nodes
        .id(function (d) {
          return d.id;
        }) // This provide  the id of a node
        .links(links)
    )
    .force("charge", d3.forceManyBody().strength(5))
    .force("radial", d3.forceRadial(250, width / 2, height / 2))
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

    link
      .attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });
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
