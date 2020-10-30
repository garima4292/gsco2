var speed, wall, bullet, weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(23,88));

  bullet = createSprite(50, 200, 100, 30);
  wall= createSprite(1200,200,thickness,200);
  wall.shapeColor = rgb(80,80,80);
  bullet.shapeColor="white";
  bullet.velocityX = speed;

  
}

function draw() {
  background("purple"); 
  
  damage = Math.round((0.5*weight*speed*speed)/(wall.width*wall.width*wall.width)); 
  if(collided(wall,bullet)){
    
    bullet.velocityX = 0;
    
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage <=10){
      wall.shapeColor = "green";
    }
  }


  drawSprites();

  textSize(20);
  fill("white");
  stroke("yellow");
  text("Speed: "+speed,1000,20);
  text("Weight: "+weight,1000,60);
  text("Damage: "+damage,1000,100);
}

function collided(ob1,ob2){
if((ob1.x-ob2.x) < (ob1.width/2 + ob2.width/2)){
  return true;
}
else{
  return false;
}
}