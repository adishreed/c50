var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload(){
bgImg = loadImage("bg.png")

girlImg = loadImage("girl.png")

obsTop1 = loadImage("butterfly.webp")


obsBottom1 = loadImage("obsBottom1.png")
obsBottom2 = loadImage("obsBottom2.png")
obsBottom3 = loadImage("obsBottom3.png")

}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
girl = createSprite(100,200,20,50);
girl.addImage("girl",girlImg);
girl.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            girl.velocityY = -6 ;
            
          }

          //adding gravity
           girl.velocityY = girl.velocityY + 2;

           
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    obstacleTop.addImage(obsTop1);
    

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;
  
    girl.depth = girl.depth + 1;

      }
}

 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = girl.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}


  
