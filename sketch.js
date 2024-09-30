let isMulticolor = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (isMulticolor) {
    background(random(255), random(255), random(255));
  } else if (distance < 50) {
    background(0);
  } else {
    background(255, 255);
  }

  if (isMulticolor) {
    fill(random(255), random(255), random(255));
  } else if (distance < 50) {
    fill(255, 255);
  } else {
    fill(0);
  }

  if (distance < 50) {
    drawStar(width / 2, height / 2, 30, 70, 5);
  } else {
    ellipse(width / 2, height / 2, 100, 100);
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mousePressed() {
  isMulticolor = !isMulticolor;
}
