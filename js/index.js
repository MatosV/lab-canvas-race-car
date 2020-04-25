window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const $canvas = document.querySelector('canvas');
    const game = new Game($canvas);
    startGame();
  };

  function startGame() {
  }
};

