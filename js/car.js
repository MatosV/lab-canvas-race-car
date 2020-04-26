class Car {
  constructor(game, x){
    this.game = game;
    this.context = this.game.context;

    this.x = x;

    this.carImg = new Image();
    this.carImg.src = "./../images/car.png";

    //THE VALUE OF THE CAR ON x
    this.position = 250;
 }

 
  draw(){   
    /*
    ctx.drawImage(image, dx, dy);
    ctx.drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    */  
   
    this.carImg.addEventListener('load', () => {                            
      this.context.drawImage(
        //IMG   dx               dy  dWidth       dHeight
        this.carImg, 
        this.position, 
        700, carWidth/2, carHeight/2
      );
    });
  }

  moveLeft() {
    this.x -= 1;
  }
  
  moveRight() {
    this.x += 1;
  }
}



  


