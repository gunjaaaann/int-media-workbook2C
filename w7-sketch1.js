let bottomImg;
let overlayColor;
let canvas;

function preload() {
  bottomImg = loadImage('./images/w7.1.JPG'); 
}

function setup() {
  canvas = createCanvas(1200, 900);
  canvas.parent('canvas-container');  
  overlayColor = color(0, 0, 0); 
  imageMode(CENTER); 
}

function draw() {
  image(bottomImg, width / 2, height / 2, width, height);
  fill(overlayColor);
  noStroke();
  rect(0, 0, width, height); 
  
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let radius = 200;
    let x = mouseX - radius / 2;
    let y = mouseY - radius / 2;
    copy(bottomImg, x, y, radius, radius, x, y, radius, radius); 
  }
}
