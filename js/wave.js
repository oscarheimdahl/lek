let ringRadiuses = [];
let ringsNR = 10;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5');
  for (let i = 0; i < ringsNR; i++) {
    ringRadiuses.push((windowWidth / 2 / ringsNR) * i);
  }
  noFill();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(5);
  //   background(78, 214, 156);
  clear();
  for (let i = 0; i < ringRadiuses.length; i++) {
    let opaci = 255 - (255 * ringRadiuses[i]) / 1000;
    stroke(color(255, 0, 162, opaci));
    ellipse(width / 3, height, ringRadiuses[i] * 2);
    ringRadiuses[i] += 0.5;
    if (ringRadiuses[i] > 1000) ringRadiuses[i] = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
