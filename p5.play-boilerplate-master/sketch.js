var mRect,fRect;
function setup() {
  createCanvas(1200,1200);
  mRect = createSprite(400, 200, 50, 50);
  fRect = createSprite(200,200,80,30);
  mRect.shapeColor = "green";
  fRect.shapeColor = "green";
  mRect.debug = true;
  fRect.debug = true;

}

function draw() {
  background(0);  
  mRect.x = mouseX;
  mRect.y = mouseY;
  console.log(mRect.x-fRect.x);
  if(mRect.x-fRect.x<mRect.width/2+fRect.width/2
    && fRect.x-mRect.x<fRect.width/2+mRect.width/2
    && mRect.y-fRect.y<mRect.height/2+fRect.height/2
    && fRect.y-mRect.y<fRect.height/2+mRect.height/2){
    mRect.shapeColor = "red";
    fRect.shapeColor = "red";
  }
  else{
  mRect.shapeColor = "green";
  fRect.shapeColor = "green";
}
  drawSprites();
}