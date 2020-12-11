var a = 33;
function setup() {
  createCanvas(640,480);
background(a,31,52);
  fill(10,60,10);
  rect(0,400,640,80);
  }

function draw() {
  fill(255);
    noStroke();
    ellipse(Math.random()*640,Math.random()*400,1,1);
  if(mouseIsPressed){
    a = 34;
    background(135,206,235);
    fill(a,139,34)
    rect(0,400,640,80);   
  }
  else if(a != 33){
    a = 33;
    background(a,31,52);
    fill(10,60,10);
  rect(0,400,640,80);
  }

}
