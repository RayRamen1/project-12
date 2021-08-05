var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  spawnApple();
  spawnLeaf();
  drawSprites();
}

function spawnApple(){
  if (frameCount % 80 === 0) {
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.lifetime = 150;
  }
}

function spawnLeaf(){
  if(frameCount % 80 === 0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.scale = 0.07;
    leaf.velocityY = 3;
    leaf.lifetime = 150;
  }
}