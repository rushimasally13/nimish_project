class Game {
  constructor(){
    
  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })
    
  }
  
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    
    // var heart1 = createSprite(800,150,20,20)
    // heart1.addImage("heart",heartfullImg);
    // heart1.visible = false
    // var heart2 = createSprite(800,150,20,20)
    // heart2.addImage("heart",heartfullImg);
    // heart2.visible = false
    // var heart3 = createSprite(800,150,20,20)
    // heart3.addImage("heart",heartfullImg);
    // heart3.visible = false
    // var heart4 = createSprite(800,150,20,20)
    // heart4.addImage("heart",heartfullImg);
    // heart4.visible = false
    // var heart5 = createSprite(800,150,20,20)
    // heart5.addImage("heart",heartfullImg);
    // heart5.visible = false
    // var heart6 = createSprite(800,150,20,20)
    // heart6.addImage("heart",heartfullImg);
    // heart6.visible = false
  }
  
  
  
  play(){
    form.hide();
    background(battleImg)
    player_array = Player.getPlayerInfo();
    charizard = createSprite(200,100)
    
    charizard.addAnimation("charizard",charizardImg)
    charizard.addAnimation("left",charizard2Img)
    charizard.addAnimation("right",charizard3Img)
    charizard.addAnimation("up",charizard4Img)
    charizard.addAnimation("down",charizard1Img)
    blast = createSprite(displayWidth-200,displayHeight-200)
    blast.addAnimation("blastoise",blastoiseImg)
    blast.addAnimation("left1",blastoise2Img)
    blast.addAnimation("right1",blastoise3Img)
    blast.addAnimation("up1",blastoise4Img)
    blast.addAnimation("down1",blastoise1Img)
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
      blastoise.changeAnimation("right1",blastoise3Img)
      blastoise.x = blastoise.x + 10
      
    }
    if(keyDown("a")){
      blastoise.changeAnimation("left1",blastoise2Img)
      blastoise.x = blastoise.x - 10
      
      
      
    }
    if(keyDown ("w")){
      blastoise.changeAnimation("up1",blastoise4Img)
      blastoise.y = blastoise.y - 10
      
    }
    if(keyDown ("s")){
      blastoise.changeAnimation("down1",blastoise1Img)
      blastoise.y = blastoise.y + 10
      
    }
    
   
    
   
      
    
  
  
    drawSprites();
  }
}
  
  
  





