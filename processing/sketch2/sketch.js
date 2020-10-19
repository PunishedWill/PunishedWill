function setup() {
    createCanvas(640,480);
  }
  
  function draw(){
    if(mouseIsPressed) {
    background(57,125,150);
    fill(255,255,15);
    triangle(mouseX,mouseY,mouseY,-mouseX,300,211);
  }
    else {
      background(1,86,155)
      fill(38,214,123)
      ellipse(mouseX,mouseY,40,60)
    }
  }