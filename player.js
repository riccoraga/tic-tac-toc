// Class Player
//const prompt = require("prompt-sync")();
import prompt from 'prompt-sync'

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

  makeMove(game) {
    const verified = false

    while(!verified) {
        const move = prompt("Where would you like to move?")

        if (game.board[move - 1] === "X" || game.board[move - 1] === "O") {
            console.log("This square has already been taken");
        } else {
            verified = true
        }
    }

    game.addMove(this.player, move)

    //insertMove(this.player) 
    //console.log(`${this.player} made a move: ${move}`);
    //game.addMove(this.player, move)
  }

 
}
export default Player
//const player1 = new Player("Rick - 0");
//player1.makeMove();
//const player2 = new Player("Matt - X");
//player2.makeMove();
