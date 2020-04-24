class Car {
  constructor(game){
    this.game = game;
  }

  colisionWithObjects(){
    const obstacles = this.game.obstacles;

    
  }

  runLogic() {
    switch (this.direction){
      case 'left':
        //--
        console.log('moving left');
        break;
      case 'right':
        //++
        console.log('moving right');
        break;
    }
  }
}


