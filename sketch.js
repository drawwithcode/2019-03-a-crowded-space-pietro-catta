var allLines = [];
var Line;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  fill(255);
  text('PRESS FOR YOUR MAGIC', windowWidth / 2, windowHeight / 2);

  for (var x = 0; x < windowWidth; x += 20) {
    for (var y = 0; y < windowHeight; y += 20) {

      tempx = x;
      tempy = y;
      tempx2 = x + 20;
      tempy2 = y + 20;
      var tempLine = new Line(tempx, tempy, tempx2, tempy2);

      allLines.push(tempLine);
    }
  }
}

function draw() {

  for (var i = 0; i < allLines.length; i++) {

    var tempLine = allLines[i];

    tempLine.clicked();
    tempLine.display();
  }
}

function Line(_x1, _y1, _x2, _y2) {
  this.turned = false;
  this.x1 = _x1;
  this.y1 = _y1;
  this.x2 = _x2;
  this.y2 = _y2;
  this.color = stroke('white');

  this.clicked = function() {
    if (mouseX > this.x1 && mouseX < this.x2 && mouseY > this.y1 && mouseY < this.y2 && mouseIsPressed) {
      this.turned = true;
    }
    if (this.turned == true) {
      this.x1 = _x1 + 20;
      this.x2 = _x2 - 20;
    }
  }
  this.display = function() {
  
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
