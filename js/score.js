class Score {
  constructor(game){
    this.game = game;
  }

  draw(){
    const context = this.games.context;
    const score = this.games.score;

    context.fillStyle = 'black';
    context.fillText{`${score} Points`, 50, this.game.$canvas.height -50};
  }

} 