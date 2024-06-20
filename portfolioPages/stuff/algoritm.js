let numCircles = 300;
let circles = [];
let scaleFactor = 50;

function setup() {
  createCanvas(1000, 1000);
  
  let initialRadius = int(random(1, 7)) * scaleFactor;
  circles.push({ x: 0, y: 0, r: initialRadius, col: color(random(255), random(255), random(255)) });
  
  while (circles.length < numCircles) {
    let currentCircle = circles[circles.length - 1];
    let sections = 6;
    let angleStep = TWO_PI / sections;
    
    // Choose a random section
    let section = int(random(1, 7));
    let angle = angleStep * (section - 1);
    
    
    let newX = currentCircle.x + currentCircle.r * cos(angle);
    let newY = currentCircle.y + currentCircle.r * sin(angle);
   
    let newRadius = int(random(1, 7)) * scaleFactor;
    
   
    let newColor = color(random(255), random(255), random(255));
    
   
    if (dist(newX, newY, 0, 0) + newRadius > min(width, height) / 2) {
      circles.push({ x: 0, y: 0, r: newRadius, col: newColor });
    } else {
      circles.push({ x: newX, y: newY, r: newRadius, col: newColor });
    }
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  
 
  noFill();
  for (let i = 0; i < min(frameCount, circles.length); i++) {
    let c = circles[i];
    stroke(c.col);
    ellipse(c.x, c.y, c.r * 2);
  }

 
  if (frameCount > circles.length) {
    noLoop();
  }
}
function mousePressed() {
  
    saveCanvas('screenshot', 'png');
  
}

