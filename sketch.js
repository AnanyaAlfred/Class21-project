var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
 bullet=createSprite(50, 200, 10, 10);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if(damage<10){
wall.shapeColor=color(0,255,0);
}

if(damage>10){
wall.shapeColor=color(255,0,0);
}

  } 
  drawSprites();
}
function hasCollided(object1,object2){

if(object2.x-object1.x<=(object2.width+object1.width)/2){
  return true;
}
return false;

}