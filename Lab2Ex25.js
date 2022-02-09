let cc = d3.interpolate('red', 'green')
console.log( cc(0.5) );
d3.select("body")
.append("p")
.text("let cc = d3.interpolate('red', 'green')");
d3.select("body")
.append("p")
.text("Value of cc(0.5) -> " + cc(0.5) );
d3.select("body")
.append("p")
.text("Interpolate blends the two colors given as input with the resulting color ranges starting from 0 as first color to 1 as second color. Any value passed as an argument between range 0 and 1 will return the blended color. ");

