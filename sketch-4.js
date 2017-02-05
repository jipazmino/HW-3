var x = 200 
  var x2 = 200
  var y = 0
  
function setup() { 
  createCanvas(400,400);
 
} 

function draw() { {
  

while (y < 200) {
  line (x,y,x2,y);
  x = x - 5
  x2 = x2 + 5
  y = y + 5
}


while (y >= 200) {
  line (x,y,x2,y);
  x = x + 5
  x2 = x2 - 5
  y = y + 5
  
}
}}
