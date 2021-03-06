var w = 500,
	h = 500;

var colorscale = d3.scale.category10();




var d = [
		  [
			{axis:"",value:2.5},
			{axis:"Density",value:2},
			{axis:"Functionality",value:5},
			{axis:"Abstraction",value:6},
			{axis:"",value:2.8},
			{axis:"Redundancy",value:2},
			{axis:"Familiarity",value:5},
			{axis:"Unidimensionality",value:4},
			{axis:"",value:4},
			{axis:"Lightness",value:5},
			{axis:"Decoration",value:2},
			{axis:"Figuration",value:0},
			{axis:"",value:0},
			{axis:"Novelty",value:5},
			{axis:"Originality",value:2},
			{axis:"Multidimensionality",value:4}
		  ]
		];

var mycfg = {
  w: w,
  h: h,
  maxValue: 10,
  levels: 10,
  ExtraWidthX: 300
}

RadarChart.draw("#chart", d, mycfg);


var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("");
		

