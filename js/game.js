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
    //this.clearAll();

    this.background.draw(this);
    this.car.draw(this);
    this.car.moveLeft();
    this.car.moveRight();
  }
  

  setKeyBeiding () {
    window.addEventListener('keydown', (event) =>{
      event.preventDefault();

      const keyCode = event.keyCode;
      switch (keyCode) {
        //TURN LEFT
        case 37:          
          this.car.moveLeft();
          console.log('turn left');
          break;
        case 39:          
          this.car.moveRight();
          console.log('turn right');
          break;
      }
    })
  }
}