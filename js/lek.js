function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5');
  noFill();
  frameRate(2);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  //   background(random(255), random(255), random(255), 100);
  fill(randomColor(100));
  let x = random(width);
  let y = random(height);
  //   let width = width - x;

  rect(x, y, 600, 600);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function randomColor(alpha) {
  return color(random(255), random(255), random(255), alpha);
}
