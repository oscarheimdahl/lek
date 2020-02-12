function setup() {
  initCanvas();
  ellipseMode(CENTER);
  //   setBoxes();
  noStroke();
}

function draw() {
  fill(color(31, 160, 121));
  rotate(PI / 10);
  rect(-100, (height / 3) * 2, width * 2, height);
}

function setBoxes() {}

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
