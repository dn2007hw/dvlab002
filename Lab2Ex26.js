let intrDate1 = d3.interpolate(new Date("2022-01-01"), new Date("2022-01-31"));
let intrDate2 = d3.interpolate(new Date("2022-01-01"), new Date("2022-02-01"));
let intrDate3 = d3.interpolate(new Date("2022-02-01"), new Date("2022-02-05"));
let intrDate4 = d3.interpolateDate(
  new Date("2000-01-01"),
  new Date("2022-02-02")
);

console.log(intrDate1(0.25));
console.log(intrDate2(0.75));
console.log(intrDate3(0.5));
console.log(intrDate4(0.5));

d3.select("body")
  .append("p")
  .text("Interpolation of dates using d3.interpolate and d3.interpolateDate");
