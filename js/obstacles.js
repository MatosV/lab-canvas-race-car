class Game {
  constructor(game, x, y){
      this.game = game;
      this.x = x;
      this.y = y; 
      
      this.speed = 1;

      this.width = 25;
      this.height = 25;
  }
  

  speed(){
    this.x -= this.speed;
  }

  draw(){
    this.game.context.fillRect(this.x - this.width / 2, 
      this.y - this.height / 2, 
      this.width, 
      this.height
      );
  }
}