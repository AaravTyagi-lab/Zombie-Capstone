var bg,bgImg;
var player, shooterImg, shooter_shooting;
var Z1,Z2,Z3,Z4,Z5,Z6;
var Z1img,Z2img;
var bullet;
var bulletSound;
var bulletGroup;
var backSound;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  Z1img = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg")
  bulletSound = loadSound("assets/bSound.mp3")
  backSound = loadSound("assets/bgSound.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   Z1 = createSprite(width/2+20,300,10,2);
   Z1.addImage(Z1img);
   Z1.scale=0.15;
   Z1.velocityX=-3;
   Z1.velocityY=2;

   Z2 = createSprite(width/2+200,280,10,2);
   Z2.addImage(Z1img);
   Z2.scale=0.15;
   Z2.velocityX=-3;
   Z2.velocityY=2;

   Z3= createSprite(width/2+560,240,10,2);
   Z3.addImage(Z1img);
   Z3.scale=0.15;
   Z3.velocityX=-3;
   Z3.velocityY=2;

   bulletGroup = new Group();

   Z4 = createSprite(width/2-50,300,10,2);
   Z4.addImage(Z1img);
   Z4.scale=0.15;
   Z4.velocityX=-3;
   Z4.velocityY=2;

   Z5 = createSprite(width/2+100,390,10,2);
   Z5.addImage(Z1img);
   Z5.scale=0.15;
   Z5.velocityX=-3;
   Z5.velocityY=2;

   Z6 = createSprite(width/2+200,350,10,2);
   Z6.addImage(Z1img);
   Z6.scale=0.15;
   Z6.velocityX=-3;
   Z6.velocityY=2;
}

function draw() {
  background(0); 
  backSound.play();

 if(Z1.y<0||Z2.y<0||Z3.y<0||Z4.y<0||Z5.y<0||Z6.y<0){
  Z1.velocityY=2;
  Z2.velocityY=2;
  Z3.velocityY=2;
  Z4.velocityY=2;
  Z5.velocityY=2;
  Z6.velocityY=2;
 }

 if(Z1.y>height||Z2.y>height||Z3.y>height||Z4.y>height||Z5.y>height||Z6.y>height){
  Z1.velocityY=-2;
  Z2.velocityY=-2;
  Z3.velocityY=-2;
  Z4.velocityY=-2;
  Z5.velocityY=-2;
  Z6.velocityY=-2;
 }

 if(Z1.x<0||Z2.x<0||Z3.x<0||Z4.x<0||Z5.x<0||Z6.x<0){
  Z1.velocityX=2;
  Z2.velocityX=2;
  Z3.velocityX=2;
  Z4.velocityX=2;
  Z5.velocityX=2;
  Z6.velocityX=2;
 }

 if(Z1.x>width||Z2.x>width||Z3.x>width||Z4.x>width||Z5.x>width||Z6.x>width){
  Z1.velocityX=-2;
  Z2.velocityX=-2;
  Z3.velocityX=-2;
  Z4.velocityX=-2;
  Z5.velocityX=-2;
  Z6.velocityX=-2;
 }
 if(bulletGroup.isTouching(Z1)){
   Z1.destroy();
   bulletGroup.destroyEach();
 }

 if(bulletGroup.isTouching(Z2)){
  Z2.destroy();
  bulletGroup.destroyEach();
}

if(bulletGroup.isTouching(Z3)){
  Z3.destroy();
  bulletGroup.destroyEach();
}

if(bulletGroup.isTouching(Z4)){
  Z4.destroy();
  bulletGroup.destroyEach();
}

if(bulletGroup.isTouching(Z5)){
  Z5.destroy();
  bulletGroup.destroyEach();
}

if(bulletGroup.isTouching(Z6)){
  Z6.destroy();
  bulletGroup.destroyEach();
}




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet= createSprite(player.x+40,player.y-20,7,7);
   bullet.shapeColor="white";
  bullet.velocityX=100;
  bullet.visible=true;
  bulletGroup.add(bullet);
  bulletSound.play();

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();
}
