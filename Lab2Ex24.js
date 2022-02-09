let intr = d3.interpolate( [20, 40, 4], [1, 12, 10])
console.log("Type of returned function is: ", typeof (intr) );
console.log( intr(0.2) )
d3.select("body")
.append("p")
.text("Let intr = d3.interpolate( [20, 40, 4], [1, 12, 10])");
d3.select("body")
.append("p")
.text("Type of returned function is: " + typeof (intr) );
d3.select("body")
.append("p")
.text("Value of intr(0.2) -> " + intr(0.2) );
d3.select("body")
.append("p")
.text("Interpolate blends the value of two data values passed as arguments. In the above example two array of elements are passed as argument and the a new range of elements are created between the first and second array for each element.");
