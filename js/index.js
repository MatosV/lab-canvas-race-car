/* const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {    
    startGame();
  };

  function startGame() {
  }
};

 */
//aqui precisas de fazer um on load da página para selecionar o canvas e depois um click para qd
//carregas no start game loadar a class game e o metodo de inicio do jogo
window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  const game = new Game($canvas);
  const $gameStart = document.querySelector('button');

  $gameStart.addEventListener('click', () => {
      game.start();
    });
  })
