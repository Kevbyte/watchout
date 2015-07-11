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

var colCount = 0;

var coordinates = function(){

  var enemyPosX = [];
  var enemyPosY = [];
  var playerPosX = d3.select('body').selectAll('.player').attr('x'); 
  var playerPosY = d3.select('body').selectAll('.player').attr('y');

  var enemyPos = d3.selectAll('.enemy').each(function(d){
    enemyPosX.push(d3.select(this).attr('x'))});

  var enemyPos = d3.selectAll('.enemy').each(function(d){
    enemyPosY.push(d3.select(this).attr('y'))});

  
  var collisions = function(){
    
    for(var i = 0; i < enemyPosX.length; i++){
      if(enemyPosX[i] > playerPosX){
        var a = enemyPosX[i] - playerPosX;
      } else {
        var a = playerPosX - enemyPosX[i];
      }
      if(enemyPosY[i] > playerPosY){
        var b = enemyPosY[i] - playerPosY;
      } else {
        var b = playerPosY - enemyPosY[i];
      }
      var c = Math.sqrt((a*a)+(b*b));
      if(c < 50){
        colCount++;
        console.log(colCount)
        d3.select('.collisions').selectAll('span')
        .text(colCount)
        if(currentCount>highScore){
          highScore = currentCount;
          d3.select('.high').selectAll('span')
          .text(highScore)
        }
        currentCount=0; 
      }
    }
  }
  collisions();

}

setInterval(function(){
  coordinates()
}, 150)



//__________________________________________________________________________________________________________________
//Current Score
var highScore = 0;
var currentCount = 0;

var current = function(){
  d3.select('.current').selectAll('span')
    .text(currentCount++)
}

setInterval(function(){
  current()
}, 150)