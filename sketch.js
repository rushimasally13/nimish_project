var charizard,charizard1Img,charizard2Img,charizard3Img;
var charizard4Img,charizardImg;
var blastoise,blastoiseImg,blastoise1Img,blastoise2Img,blastoise3Img,blastoise4Img;
var bgImg;
var script,scriptImg,battleImg;
var gameState = 0;
var playerCount;
var player;
var score = 0;
var form;
var game;
var allPlayers;
var blast;
var life = 3;
var life1 = 3;
var score = 0;
var score1 = 0;
var heart1,heart2,heart3,heart4,heart5,heart6,heart7,heart8;
var heartfull1,heartfull2,heartfull3,heartfull4,heartfull5,heartfull6,heartfull7,heartfull8,heartfullImg;
var hearthalf1,hearthalf2,hearthalf3,hearthalf4,hearthalf5,hearthalf6,hearthalf7,hearthalf8,hearthalfImg;
var heartlast1,heartlast2,heartlast3,heartlast4,heartlast5,heartlast6,heartlast7,heartlast8,heartlastImg;
var heartdead1,heartdead2,heartdead3,heartdead4,heartdead5,heartdead6,heartdead7,heartdead8,heartdeadImg;
var projectile1,projectile1Img,projectile2,projectile2Img;
var projectile11,projectile22;
var player11,player22,player11Img,player22Img;
function preload(){
  charizardImg = loadAnimation("charizard1.png","charizard2.png")
  charizard1Img = loadAnimation("charizard1.png","charizard2.png")
  charizard2Img = loadAnimation("charizard3.png","charizard4.png")
  charizard3Img = loadAnimation("charizard5.png","charizard6.png")
  charizard4Img = loadAnimation("charizaed7.png","charizard8.png")
  blastoiseImg = loadAnimation("charizard1.png","charizard2.png")
  blastoise1Img  = loadAnimation("charizard1.png","charizard2.png")
  blastoise2Img  = loadAnimation("charizard3.png","charizard4.png")
  blastoise3Img  = loadAnimation("charizard5.png","charizard6.png")
  blastoise4Img  = loadAnimation("charizaed7.png","charizard8.png")
  heartfullImg = loadImage("heartfull.png");
  hearthalfImg = loadImage("hearthalf.png");
  heartlastImg = loadImage("heartlast.png");
  projectile1Img = loadImage("Fprojectile.png")
  projectile2Img = loadAnimation("surf1.png","surf2.png","surf3.png","surf4.png","surf5.png","surf6.png","surf7.png","surf8.png")
  player11Img = loadImage("red.png")
  player22Img = loadImage("blue.png")
  bgImg = loadImage("loadingscreen.png")
  scriptImg = loadImage("pokemon.png");
  battleImg = loadImage("battlebackground.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  //  game = new Game();
  //  game.getState();
  //  game.start();
  game = new Game();
  game.start();
  projectile11 = new Group();
  projectile22 = new Group();
  charizard = createSprite(200,100)
  charizard.addAnimation("charizard",charizardImg)
  charizard.addAnimation("left",charizard2Img)
  charizard.addAnimation("right",charizard3Img)
  charizard.addAnimation("up",charizard4Img)
  charizard.addAnimation("down",charizard1Img)
  blast = createSprite(displayWidth-200, displayHeight-200)
  blast.addAnimation("charizard",charizardImg)
  blast.addAnimation("left",charizard2Img)
  blast.addAnimation("right",charizard3Img)
  blast.addAnimation("up",charizard4Img)
  blast.addAnimation("down",charizard1Img)
}

function draw() {
  //background(255,255,255); 
  
  if (gameState === 1&& playerCount === 2){
    form.hide();
    background(battleImg)
    drawSprites();
    fill('red')
    strokeWeight(20)
    textSize(20)
    text("score:"+ score,100,100)
    fill('blue')
    strokeWeight(20)
    textSize(20)
    text("score:"+ score1,100,130)
    
    if(keyDown("RIGHT_ARROW")){
      charizard.changeAnimation("right",charizard3Img)
      charizard.x = charizard.x + 10
      
    }
    if(keyDown("LEFT_ARROW")){
      charizard.changeAnimation("left",charizard2Img)
      charizard.x = charizard.x - 10
    }
    if(keyDown ("UP_ARROW")){
      charizard.changeAnimation("up",charizard4Img)
      charizard.y = charizard.y - 10
      
    }
    if(keyDown ("DOWN_ARROW")){
      charizard.changeAnimation("down",charizard1Img)
      charizard.y = charizard.y + 10
      
    }
    
    
    
    if(keyDown("d")){
      blast.changeAnimation("right",charizard3Img)
      blast.x = blast.x + 10
      
    }
    if(keyDown("a")){
      blast.changeAnimation("left",charizard2Img)
      blast.x = blast.x - 10
      
      
      
    }
    if(keyDown ("w")){
      blast.changeAnimation("up",charizard4Img)
      blast.y = blast.y - 10
      
    }
    if(keyDown ("s")){
      blast.changeAnimation("down",charizard1Img)
      blast.y = blast.y + 10
      
    }
   if(keyWentDown('space')){
spawnProjectile11();
   }
   if( keyWentDown ('x')){
    spawnProjectile22();
  }
  if(projectile11.isTouching(blast)){

    score++
    player.updateScore(score);
  }
  if(projectile22.isTouching(charizard)){
    score1++
    player.updateScore1(score1)
  }

  Player.getPlayerInfo();
  console.log(allPlayers)
  if(score === 100){
    player11 = createSprite(500,500)
    player11.addImage("player1",player11Img)
    
    text("the champion is"+allPlayers["player1"].name,500,500)
  }
  if(score1 === 100){
    player22 = createSprite(dispayWidth,displayHeight)
    player22.addImage("player2",player22Img)
    text("the champion is"+allPlayers[player2].name,500,500)
  }
  
  //drawSprites();
}
function spawnProjectile11(){
 
    projectile1 = createSprite(charizard.x,charizard.y)
    projectile1.addImage("projectile11",projectile1Img)

    projectile1.scale = 0.2;
    projectile11.add(projectile1)
    projectile1.velocityY = 6
  projectile1.depth = blast.depth
  blast.depth+=1
  
  }
}



function spawnProjectile22(){
 
    projectile2 = createSprite(blast.x,blast.y)
    projectile2.addAnimation("projectile22",projectile2Img)
    projectile2.velocityY = -6
    projectile22.add(projectile2)
    projectile2.depth = charizard.depth
    charizard.depth+=1
  
}





