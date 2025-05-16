var capture;
function setup() {
  canvas = createCanvas(windowWidth, 900);
  canvas.parent('canvas-container');  
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
}
function draw() {
  image(capture, mouseX, mouseY, 300, height);
  filter(POSTERIZE, 5);
}

// let lang = navigator.language || 'en-US';
// let speechRec = new p5.SpeechRec(lang, gotSpeech);
// let continuous = true;
// let interim = true;
// var runningText;
// function setup(){
//   background(0);
//   createCanvas(windowWidth, 900);
//   canvas.parent('canvas-container');  
//   speechRec.onResult = showResult;
//   speechRec.start(continuous, interim);
 
// }

// function draw(){
//  //gotSpeech();
//  //text(runningText, width/2, height/2);
// }

// function showResult(){
//  if (speechRec.resultValue === true) {
//    background(0);
//    textSize(72);
//    fill(255);
//    text(speechRec.resultString, 50, height/2);
// }
// }

// function gotSpeech(){
//     if(speechRec.resultValue){
       
//       createP(speechRec.resultString);
//       runningText=speechRec.resultString;
//     }
//     fill (255);
 
//   }