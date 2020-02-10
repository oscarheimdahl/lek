let p;
let w = 10;

function setup() {
  initCanvas();
  noStroke();
  fill(255);
  p = createVector(100, 100);
}

function draw() {
  ellipse(p.x, p.y, w);
  p.x++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function initCanvas() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5');
}

function randomColor(alpha) {
  return color(random(255), random(255), random(255), alpha);
}
