class Player {
    constructor(){
      this.index = null;
      
      this.name = null;
    }
  

  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
       
      });
    }
    getScore(){
var scoreRef = database.ref('score');
scoreRef.on("value",(data) =>{
  score = data.val();
})
    }
    updateScore(score){
database.ref('/').update({
  score:score
})
    }
    getScore1(){
      var score1Ref = database.ref('score1');
      score1Ref.on("value",(data) =>{
        score1 = data.val();
    })
  }
    updateScore1(score1){
      database.ref('/').update({
        score1:score1
    })
    }
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  