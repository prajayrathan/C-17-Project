var bow , arrow,  scene;
var redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;



function preload(){
 //load your images here 
 backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
    createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
   
  for (i=60;i<400;i=i+70){
    var redballoon=createSprite(50,i,20,40)
    redballoon.addImage(red_balloonImage)   
    redballoon.scale=0.10
  }
  for (i=100;i<250;i=i+70){
    var blueballoon=createSprite(170,i,20,40)
    blueballoon.addImage(blue_balloonImage)   
    blueballoon.scale=0.10
  }
  for (i=80;i<300;i=i+70){
    var greenballoon=createSprite(110,i,20,40)
    greenballoon.addImage(green_balloonImage)   
    greenballoon.scale=0.10
  }
for (i=150;i<250;i=i+70){
    var pinkballoon=createSprite(220,i,20,40)
    pinkballoon.addImage(pink_balloonImage)   
    pinkballoon.scale=1.15
  }
}

function draw() {
background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  //add code here
  drawSprites();
}

