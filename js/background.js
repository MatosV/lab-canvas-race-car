class Background {
  constructor(game){
    //this.game = game; 
    this.context = game.context;
    this.width = game.width;
    this.height = game.height;
    this.y = 0;
    this.velocityY = -4;
  }

  draw() {  

    /*

    $canvas W - 500
    $canvas H - 700

    fillRect(x, y, width, height);
    
    x - The x-axis coordinate of the rectangle's starting point.
    y - The y-axis coordinate of the rectangle's starting point.
    width - The rectangle's width. Positive values are to the right, and negative to the left.
    height - The rectangle's height. Positive values are down, and negative are up.
    
    */

    //ROAD
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 40, 700);
    this.context.fillRect(460, 0, 40, 700);
    this.context.fillStyle = 'grey';
    this.context.fillRect(40, 0, 10, 700);
    this.context.fillRect(450, 0, 10, 700);   
    this.context.fillStyle = 'white';
    this.context.fillRect(50, 0, 10, 700);
    this.context.fillRect(440, 0, 10, 700);   
    this.context.fillStyle = 'grey';
    this.context.fillRect(60, 0, 380, 700);     

    //LOOP FOR THE MIDDLE LINE
    /* this.context.fillStyle = 'white';
    this.context.fillRect(250, 0, 5, 700) */
    for (let i = -620; i < 700; i += 50) {
      this.context.strokeStyle = 'white';
      this.context.lineWidth = 5;
      this.context.beginPath();
      this.context.moveTo(250, i-this.y);
      this.context.lineTo(250, i+30-this.y);
      this.context.stroke();
      this.context.closePath();
    }
  }
  //tens que ter um metodo no background que faça com que dê a sensação de movimento
  update() {
    this.y += this.velocityY;
    this.y %= $canvas.height;
  } 
}
