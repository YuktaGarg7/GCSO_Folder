var wall, thickness;
var bullet, speed, weight;

function setup() {
createCanvas(windowWidth,windowHeight);

speed = random(55,90);
weight = random(400,1500);
thickness = random(22,83);

bullet = createSprite(width/4 - 100,height/2,60,5);
bullet.velocityX = speed;
wall = createSprite(width - 100,height/2,thickness,height/4);

}

function draw() {
  background("black");  
	if (hasCollided(bullet,wall)){

   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

   if(damage < 10){
		wall.shapeColor = "green";
   }else{
		wall.shapeColor = "red";
   }
   }
  drawSprites();
}