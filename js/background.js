const image = new Image();
image.src = (`/images/road.png`);

class Background {
  constructor(game){
    this.game = game;    
  }

  draw() {
    const context = this.game.context;
    const $canvas = context.canvas;

    const width = $canvas.width;
    const height = $canvas.height;

    for (let i=0; i<image.clientHeight;i++){
      const layer = image;
      context.drawImage(layer, 0, 0, width, height);
    }
  }
}