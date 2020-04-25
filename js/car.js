class Car {
  constructor(game, x ,y ){
    this.game = game;

    this.x = x;
    this.y = y;
  }

  draw(){

  }

  colision(){
    const obstacles = this.game.obstacles;    
  }

  move() {
    switch (this.direction){
      case 'left':
        this.x--;
        console.log('moving left');
        break;
      case 'right':
        this.x++;
        console.log('moving right');
        break;
    }
  }

}
  


