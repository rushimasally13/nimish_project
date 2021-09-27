class Form {
  
  constructor() {
    
    this.input = createInput("Name");
    this.button = createButton('Next');
    this.reset = createButton('reset')
  }
  hide(){
    
    this.button.hide();
    this.input.hide();
    
    
  }
  
  display(){
    background(bgImg)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      
      player.update();
      player.updateCount(playerCount);
      script = new Script()
      script.display();
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
    })
    
  }
  
  
}
