var trex, trex_running;
var groundImage,ground;
var edges 
var invisibleGround


// used for loading images


function preload()
{
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundImage=loadImage("ground2.png")
}


function setup()
{
  createCanvas(600,200);

  //Creating trex
  trex=createSprite(50,100,40,40)
  trex.addAnimation("running",trex_running)

  // Resizing the trex picture 
  trex.scale=0.5

  //Ground
  ground = createSprite(300,180,600,10)
  ground.addImage("ground",groundImage)
  ground.shapeColor = "black"
  console.log(ground)
  invisibleGround=createSprite(300,190,600,10)
  invisibleGround.visible=false
  
  
  edges=createEdgeSprites()
}


function draw(){
  //set background color 
  background("white");
  console.log(trex.y)
// Created a infinte running ground 
    if(ground.x<0)
    {
    ground.x=ground.width/2
    }

   //MAKE IT JUMP 
   if (keyDown ("space") && trex.y>=100) 
   {
    trex.velocityY = -10
   }

//Added the gravity
 trex.velocityY = trex.velocityY+0.8  

//Made trex to collide
 trex.collide(invisibleGround)
 ground.velocityX = -2



  drawSprites();
}
//press ALT and tab togather 