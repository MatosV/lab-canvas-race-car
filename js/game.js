class Game {
  constructor($canvas){
    this.$canvas = canvas;
    this.context = context
    this.score = 

    this.setKeyBeiding();
  }

  start() {
    this.car = new Car(this);
    this.obstacles = new this.Obstacles(this);
    this.background = new this.Background(this);
  }

  setKeyBeiding () {
    window.addEventListener('keydown', (event) =>{
      
      const keyCode = event.keyCode;
      switch (keyCode) {
        //TURN LEFT
        case 37:
          event.preventDefault();
          this.car.direction = 'left';
          break;
        case 39:
          event.preventDefault();
          this.car.direction = 'right';
          break;
      }
    })
  }

  draw() {

  }

}