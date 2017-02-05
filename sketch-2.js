function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
 
	var x = 0 
  var y = 0
	while (x <= width) {  
  noFill();
  ellipse (200, 200, x, y);
  x = x + 10 
  y = y + 10  
  }
  }
