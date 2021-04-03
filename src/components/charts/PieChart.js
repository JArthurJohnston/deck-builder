export function build(data, size, id) {
    var svg = d3.select(`#${id}`),
    width = size,
    height = size,
  radius = Math.min(width, height) / 2;

  svg.attr("width", size);
  svg.attr("height", size);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var color = d3.scaleOrdinal([
    "#4daf4a",
    "#377eb8",
    "#ff7f00",
    "#984ea3",
    "#e41a1c",
    "#006100"
  ]);

  var pie = d3.pie().value(function (d) {
    return d.value;
  });

  var path = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  var label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 80);

  var arc = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arc
    .append("path")
    .attr("d", path)
    .attr("fill", function (d) {
      return color(d.data.name);
    });

  console.log(arc);

  arc
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .text(function (d) {
      return d.data.name;
    });

  svg
    .append("g")
    .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
    .append("text")
    .text("Types")
    .attr("class", "title");
}
