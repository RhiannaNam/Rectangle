var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 80);
  movingRect = createSprite(200, 200, 100, 80);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  drawSprites();
}