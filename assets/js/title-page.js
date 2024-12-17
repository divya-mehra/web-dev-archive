import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = [
  "Digital Humanities",
  "Web Development",
  "Internet Archives",
  "Design Principles",
];

const svg = d3.select("svg");

const text = svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", 0)
  .attr("y", (d, i) => 10 + i * 10)
//   .attr("font-size", "24") // Initial font size
  .attr("font-family", "Inter")
  .text((d) => d)
  .style("fill", "black")
  .style("text-transform", "uppercase");

// Calculate the text width and adjust the font size accordingly
const bbox = text.node().getBBox();
const width = bbox.width;
const height = bbox.height;

// Scale font size to fill the container
const svgWidth = parseInt(svg.style("width"));
const svgHeight = parseInt(svg.style("height"));

const scale = Math.min(svgWidth / width, svgHeight / height);
text.attr("font-size", scale * 1); // Adjust font-size based on scale factor

text.transition()
  .duration(1000)
  .attr("y", 10)
  .style("fill", "red");
