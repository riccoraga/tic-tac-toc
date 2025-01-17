// Class Player
//const prompt = require("prompt-sync")();
const prompt = require('prompt-sync')();

class Player {
  constructor(player, game) {
    this.player = player;
    this.game = game
  }

  setPlayer(player) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  makeMove() {
    let verified = false
    let move = ""

    while(!verified) {
        move = prompt("Where would you like to move?")

        if (this.game.board[move - 1] === "X" || this.game.board[move - 1] === "O") {
            console.log("This square has already been taken");
        } else {
            verified = true
        }
    }

    this.game.addMove(this.player, move)

    //insertMove(this.player) 
    //console.log(`${this.player} made a move: ${move}`);
    //game.addMove(this.player, move)
  }

 
}

module.exports = {
  Player
}

//export default Player
//const player1 = new Player("Rick - 0");
//player1.makeMove();
//const player2 = new Player("Matt - X");
//player2.makeMove();
