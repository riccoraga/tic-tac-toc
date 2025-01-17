// Class Player
import Game from "./gameMain.js"
const game = new Game();

class Player {
  constructor(player) {
    this.player = player;
  }

  setPlayer(player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  makeMove(move) {
    console.log(`${this.player} made a move: ${move}`);
    //game.addMove(getPlayer, getMove)
  }
}

const player1 = new Player("Rick - 0");
player1.makeMove("2");
const player2 = new Player("Matt - X");
player2.makeMove("3");
