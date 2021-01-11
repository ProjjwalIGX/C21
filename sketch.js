var fixedRect
var movingRect
var fixedRect2
var fixedRect3
var fixedRect4





function setup() {
  createCanvas(800,400);
 movingRect=createSprite(400, 200, 50, 50);
 fixedRect=createSprite(400, 200, 80, 100);
 fixedRect2=createSprite(500, 200, 80, 100);
 fixedRect2.shapeColor="green"
 fixedRect3=createSprite(600, 200, 80, 100);
 fixedRect3.shapeColor="green"
 fixedRect4=createSprite(700, 200, 80, 100);
 fixedRect4.shapeColor="green"
 
}


function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(fixedRect,movingRect) || isTouching(fixedRect2,movingRect)|| isTouching(fixedRect3,movingRect)|| isTouching(fixedRect4,movingRect))
  {
    
  }
   else {
   

   }

  drawSprites();
  
}
function isTouching(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 
    && object2.x - object1.x <= object2.width/2 + object1.width/2 
    && object1.y - object2.y <= object2.height/2 + object2.height/2
     && object2.y - object1.y<= object2.height/2 + object1.height/2)
    {
      object1.shapeColor="red"
      object2.shapeColor="red"
       return true


    } 
     else   { 
      object1.shapeColor="green"
      object2.shapeColor="green"
      
      return false }

}