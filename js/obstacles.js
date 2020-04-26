class Obstacles {
  constructor(game, x, y){
      this.game = game;
      this.context = this.game.context;

      this.x =x;
      this.y = y; 

      this.speed = 1;

      this.width = 50;
      this.height = 25;      
  }

  collion(car) {
    return(
      car.x + car.width / 2 > this.x - this.width / 2 &&
      car.x - car.width / 2 < this.x + this.width / 2 &&
      car.y + car.height / 2 > this.y - this.height / 2 &&
      car.y - car.height / 2 < this.y + this.height / 2
    );
  }

  runLogic () {
    this.x -= this.speed;
  }


  draw(){
    // DRAW OBS
    this.context.fillStyle = 'red';
    this.context.fillRect(
      this.x - this.width / 2, 
      this.y - this.height / 2, 
      this.width, this.height
      );
  }
}