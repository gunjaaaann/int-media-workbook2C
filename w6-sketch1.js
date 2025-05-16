var sound, analyzer, volume;
let canvas;

function preload() {
  sound = loadSound("data/piano.wav");
}

function setup() {
  canvas = createCanvas(1500, 900);
  getAudioContext().suspend();
  analyzer = new p5.Amplitude();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  volume = analyzer.getLevel();

  if (volume > 0.1) {
    let x = random(width);
    let h = map(volume, 0, 0.5, 50, 300);
    let w = random(10, 30);
    fill(255);
    stroke(0);
    rect(x, height / 2 - h / 2, w, h);
  }
}

function mousePressed() {
  getAudioContext().resume();
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound);
  loop(); 
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
    sound.loop();
  }
}