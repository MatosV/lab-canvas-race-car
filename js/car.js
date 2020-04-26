class Car {
  constructor(game){
    this.game = game;
    this.context = this.game.context;

    //THE VALUE OF THE CAR ON x
    this.position = 250;
 }


  draw(){   
    let carImg = new Image();
    carImg.src = "/images/car.png"

    /*
    ctx.drawImage(image, dx, dy);
    ctx.drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    */   

    const carHeight = 319;
    const carWidth = 158;
                          //IMG   dx               dy  dWidth       dHeight
    this.context.drawImage(carImg, this.position, 700, carWidth/2, carHeight/2)
  }

}



  


