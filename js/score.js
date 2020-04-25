class Score {
  constructor(game){
    this.game = game;
  }

  draw(){
    const context = this.game.context;
    const score = this.game.score;

    console.log(score);

    context.font = '1em sans-serif';

    context.fillText(`${score} Points`, 50, this.game.$canvas.height -50);
  }
} 