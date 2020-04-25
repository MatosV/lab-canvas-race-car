class Game {
  constructor($canvas){
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    
    this.score = new Score(this);
    this.background = new Background(this);
    this.car = new Car(this);
    this.obstacles = new Obstacles(this);

    this.setKeyBeiding();
  }

  start() {
    this.player = new Player(this);
    this.obstacles = [];    
  }

  setKeyBeiding () {
    window.addEventListener('keydown', (event) =>{
      
      const keyCode = event.keyCode;
      switch (keyCode) {
        //TURN LEFT
        case 37:
          // preventDefault() => default action should not be taken as it normally would be
          event.preventDefault();
          this.car.direction = 'left';
          console.log('turn left');
          break;
        case 39:
          // preventDefault() => default action should not be taken as it normally would be
          event.preventDefault();
          this.car.direction = 'right';
          console.log('turn right');
          break;
      }
    })
  }

  clearAll () {
    this.context.clearRect(0, 0, this.$canvas.width, 
      this.$canvas.height);
  }

  draw() {
    this.clearAll();

    this.background.draw();
    this.car.draw();
    this.obstacles.draw();
    this.score.draw();
  }

}