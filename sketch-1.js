function setup() { 
  createCanvas(400, 400);
} 
function draw() { 
  background (250)
  
  var x = 200
  var y = 0
  var z = 0
while (z <= 400) {
  line (x,y,z,400);
  z = z + 5 
  }
}
