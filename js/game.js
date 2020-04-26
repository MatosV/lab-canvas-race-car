class Game {
  constructor($canvas){
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.x = $canvas.width;
    this.y = $canvas.height;
    
    this.car = new Car(this);
    this.score = new Score(this);
    this.background = new Background(this);
    this.obstacles = new Obstacles(this);
    this.obstacles = [];

    this.setKeyBeiding();
  }

  clearAll () {
    this.context.clearRect(0, 0, this.y, this.x);
  }

  start() {
    this.clearAll();

    this.background.draw(this);
    this.car.draw(this);
  }
  

  setKeyBeiding () {
    window.addEventListener('keydown', (event) =>{
      
      const keyCode = event.keyCode;

      switch (keyCode) {
        //TURN LEFT
        case 37:
          // preventDefault() => default action should not be taken as it normally would be
          event.preventDefault();
          this.car = 'left';
          console.log('turn left');
          break;
        case 39:
          // preventDefault() => default action should not be taken as it normally would be
          event.preventDefault();
          this.car = 'right';
          console.log('turn right');
          break;
      }
    })
  }
}