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

// var collision = function(){
//   var enemyPos = d3.selectAll('.enemy').each(function(d){
//     console.log(d3.select(this).attr('x'))});
  
//   // var playerPos = d3.selectAll('.player').each(function(d){
//   //   return d
//   // })
// }


// setInterval(function(){
//   collision()
// }, 10500)


//__________________________________________________________________________________________________________________
//Current Score
var count = 0

var current = function(){
  d3.select('.current').selectAll('span')
    .text(count++)
}

setInterval(function(){
  current()
}, 750)


