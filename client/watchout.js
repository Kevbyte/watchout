//Moving Enemies

var data = [{'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}, 
{'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750},
{'x':1150, 'y':750}, {'x':1150, 'y':750}, {'x':1150, 'y':750}];

var update = function(data){
  d3.select('body').selectAll('.enemy')
    .data(data)
    .transition()
    .duration(1500)
    .attr("x", function(d){
      return d.x * Math.random()
    })
    .attr("y", function(d){
      return d.y * Math.random()
    })
}; 

update(data);

setInterval(function(){
  update(data)
}, 1500);

//__________________________________________________________________________________________________________________
//Draggable Player

var drag = d3.behavior.drag()  
  // .on('dragstart', function() { circle.style('fill', 'red'); })
  .on('drag', function() { lebron.attr('x', d3.event.x)
    .attr('y', d3.event.y); })
  // .on('dragend', function() { circle.style('fill', 'black'); });

var lebron = d3.select('body').selectAll('.player')  
  .data([{ 'x': 565, 'y': 365}])
  .attr('x', function(d) { return d.x; })
  .attr('y', function(d) { return d.y; })
  .call(drag)

//__________________________________________________________________________________________________________________
//Collisions




//__________________________________________________________________________________________________________________
//Current Score

var current = function(){
  d3.select('body').selectAll('.current')
    .data()
}






// d3.select('body').selectAll('.enemy')
//   .data(data)
//   .attr("x", function(d){
//     return d.x * Math.random()
//   })
//   .attr("y", function(d){
//     return d.y * Math.random()
//   })
//   .transition()
//   .duration(1500)




// var randomX = function(){
//   //generates random xcoordinates within the svg boundaries

// }

// var randomY = function(){
//   //generates random y coordinates within the svg boundaries
// }




