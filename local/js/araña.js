var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Data

var botonB = false;
var dataMediaBenigno = null;
var legendBenigno = 'Promedio Benigno';

var botonM = false;
var dataMediaMaligno = null;
var legendMaligno = 'Promedio Maligno';

var botonG = false;
var dataMediaTotal = null;
var legendTotal = 'Promedio General';

var dataMediaBenigno = [
			{axis:"Agrupación Celular",value:2.9563},
			{axis:"Uniformidad Tamaño",value:1.3253},
			{axis:"Uniformidad Forma",value:1.4432},
			{axis:"Adhesión Marginal",value:1.3646},
			{axis:"Tamaño epitelio",value:2.1200},
			{axis:"Desnudez núcleo",value:1.3256},
			{axis:"Textura cromatina",value:2.1004},
			{axis:"Normalidad nucléolo",value:1.2903},
			{axis:"Mitosis",value:1.0633}
		  ];
		
var dataMediaMaligno = [
			{axis:"Agrupación Celular",value:7.1950},
			{axis:"Uniformidad Tamaño",value:6.5726},
			{axis:"Uniformidad Forma",value:6.5601},
			{axis:"Adhesión Marginal",value:5.5477},
			{axis:"Tamaño epitelio",value:5.2987},
			{axis:"Desnudez núcleo",value:9.5678},
			{axis:"Textura cromatina",value:5.9792},
			{axis:"Normalidad nucléolo",value:5.8630},
			{axis:"Mitosis",value:2.5892}
		  ];

var dataMediaTotal = [
			{axis:"Agrupación Celular",value:4.4177},
			{axis:"Uniformidad Tamaño",value:3.1344},
			{axis:"Uniformidad Forma",value:3.2074},
			{axis:"Adhesión Marginal",value:2.8068},
			{axis:"Tamaño epitelio",value:3.2160},
			{axis:"Desnudez núcleo",value:5.5446},
			{axis:"Textura cromatina",value:3.4377},
			{axis:"Normalidad nucléolo",value:2.8669},
			{axis:"Mitosis",value:1.5894}
];

//Legend titles
var LegendOptions = [legendBenigno, legendMaligno, legendTotal];

var data = [dataMediaBenigno, dataMediaMaligno, dataMediaTotal];

var texto = "Comparación entre medias para cada atributo medido de las celulas";

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 10,
  levels: 10,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", data, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
// var text = svg.append("text")
//	.attr("class", "title")
//	.attr('transform', 'translate(90,0)') 
//	.attr("x", w - 20)
//	.attr("y", 10)
//	.attr("font-size", "12px")
//	.attr("fill", "#404040")
//	.text(texto);
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(200,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	