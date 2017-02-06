function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  

  var y = 300

    for (var x = 100; x < width; x = x + 200) {
      for (var x2 = 20; x2 <= 100; x2 = x2 + 20) {
  		rectMode (CENTER);
 			noFill();
  		rect(x,y,x2,x2);
  }
    }
}
