var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['General','Maligno','Benigno'];

//Data
var d = [
		  [
			{axis:"Agrupación celular",value:4.41},
			{axis:"Uniformidad de tamaño",value:3.13},
			{axis:"Uniformidad de forma",value:3.2},
			{axis:"Adhesión marginal",value:2.8},
			{axis:"Tamaño epitetal",value:3.21},
			{axis:"Desnudez de núcleo",value:5.54},
			{axis:"Textura cromatina",value:3.43},
			{axis:"Normalidad de nucleolo",value:2.86},
			{axis:"Mitosis",value:1.58}
		  ],[
			{axis:"Agrupación celular",value:7.19},
			{axis:"Uniformidad de tamaño",value:6.57},
			{axis:"Uniformidad de forma",value:6.56},
			{axis:"Adhesión marginal",value:5.54},
			{axis:"Tamaño epitetal",value:5.29},
			{axis:"Desnudez de núcleo",value:9.56},
			{axis:"Textura cromatina",value:5.97},
			{axis:"Normalidad de nucleolo",value:5.86},
			{axis:"Mitosis",value:2.58}
		  ],[
			{axis:"Agrupación celular",value:2.95},
			{axis:"Uniformidad de tamaño",value:1.32},
			{axis:"Uniformidad de forma",value:1.44},
			{axis:"Adhesión marginal",value:1.36},
			{axis:"Tamaño epitetal",value:2.12},
			{axis:"Desnudez de núcleo",value:1.32},
			{axis:"Textura cromatina",value:2.1},
			{axis:"Normalidad de nucleolo",value:1.29},
			{axis:"Mitosis",value:1.06}
		  ]
		];

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
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Tipos");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
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
	  .style("fill", function(d, i){ 
	  	if(i==1){
	  		return "#F44336";
	  	}if(i==2){
	  		return "#4CAF50";
	  	}else{
	  		return colorscale(i);
	  	}
	  	

	  })
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
