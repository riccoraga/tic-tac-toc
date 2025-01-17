// Class Player
//const prompt = require("prompt-sync")();
const prompt = require("prompt-sync")();

class Player {
  constructor(player, game) {
    this.player = player;
    this.game = game;
  }

  setPlayer(player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  makeMove() {
    let verified = false;
    let move = "";
    const moveAction = () => {
      move = prompt(
        `${this.player} turn, where would you like to move, 1 to 9: `
      );
      if (move.toLowerCase() === "q") {
        process.exit(0);
      } else if (move >= 1 && move <= 9) {
        if (
          this.game.board[move - 1] === "X" ||
          this.game.board[move - 1] === "O"
        ) {
          console.log("This square has already been taken");
        } else {
          verified = true;
          this.game.addMove(this.player, move);
        }
      } else {
        console.log("Invalid move. Please enter a number between 1 and 9.");
      }
    };
    while (!verified) {
      moveAction();
    }
    console.log(`${this.player} made a move: ${move}`);
  }
}

module.exports = {
  Player,
};

//export default Player
//const player1 = new Player("Rick - 0");
//player1.makeMove();
//const player2 = new Player("Matt - X");
//player2.makeMove();
