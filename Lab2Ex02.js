// Changing the font color, size, height and family thru testclass with Select command
d3.select("body")
  .append("p")
  .text("Demo for change in font, color, background, alignment etc...")
  .classed("p1", true);

d3.select("body")
  .append("div")
  .text("On mouse over, you see the change in color, font and background.");
d3.select("body")
  .append("p")
  .text("Demo for change in font, color, background, alignment etc...")
  .classed("p2", true);

d3.select("body")
  .append("p")
  .text("Demo for change in font, color, background, alignment etc...")
  .classed("p3", true);

d3.select("body")
  .append("p")
  .text("Demo for change in font, color, background, alignment etc...")
  .classed("p4", true);

d3.select("body")
  .append("div")
  .text(
    "On mouse over, you see the change in color, font, background and alignment."
  );
