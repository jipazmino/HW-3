function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
  var x = 0
  var y = 0
while (x <= 400) {

  line (x,0, x,y);
  x = x + 5 
  y = y + 10
  }
}
