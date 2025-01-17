class Game {
  constructor(player1, player2) {
    this.player1 = player1; //Player 1 is X
    this.player2 = player2; //Player 2 is O
    
  }

  board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  continue = true

  moveCount = 0

  displayBoard() {
    console.log(
      ` ${this.board[0]} | ${this.board[1]} | ${this.board[2]} \n-----------\n ${this.board[3]} | ${this.board[4]} | ${this.board[5]} \n-----------\n ${this.board[6]} | ${this.board[7]} | ${this.board[8]} \n`
    );
  }

  addMove(player, move) {
    //Has the square already been chosen
    this.board[move - 1] = player; //player is either X or O
    console.clear();
    this.displayBoard();
    console.log(`${player} made a move: ${move}`);
    this.moveCount += 1
    this.hasWon()
    if(this.moveCount === 9) {this.isDraw()}
  }

  hasWon() {
    if (
      this.board[0] + this.board[1] + this.board[2] === "XXX" ||
      this.board[3] + this.board[4] + this.board[5] === "XXX" ||
      this.board[6] + this.board[7] + this.board[8] === "XXX" ||
      this.board[0] + this.board[3] + this.board[6] === "XXX" ||
      this.board[1] + this.board[4] + this.board[7] === "XXX" ||
      this.board[2] + this.board[5] + this.board[8] === "XXX" ||
      this.board[0] + this.board[4] + this.board[8] === "XXX" ||
      this.board[2] + this.board[4] + this.board[6] === "XXX"
    ) {
      console.log("Player 1 - X has won");
      this.continue = false
    } else if (
      this.board[0] + this.board[1] + this.board[2] === "OOO" ||
      this.board[6] + this.board[7] + this.board[8] === "OOO" ||
      this.board[3] + this.board[4] + this.board[5] === "OOO" ||
      this.board[0] + this.board[3] + this.board[6] === "OOO" ||
      this.board[1] + this.board[4] + this.board[7] === "OOO" ||
      this.board[2] + this.board[5] + this.board[8] === "OOO" ||
      this.board[0] + this.board[4] + this.board[8] === "OOO" ||
      this.board[2] + this.board[4] + this.board[6] === "OOO"
    ) {
      console.log("Player 2 - O has won");
      this.continue = false
    }
  }

  isDraw() {
      console.log("It's a draw");
      this.moveCount = 0
      this.continue = false
  }
}

//export default Game;

module.exports = {     
  Game
}
