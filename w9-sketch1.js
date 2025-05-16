let canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');  
    stroke(255);
    background(0);
    // html 'instructions' made in p5
    p=createP();
    p.position(20,20);
    p.style('color','white');;
  }
  
  function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  }
  function keyPressed(){
    if (key == 's'){
      saveCanvas('fileName', 'png');
    }
    if (key == ' '){
      background(0);
    }
  }