class Game {
  constructor(player1, player2) {
    this.player1 = player1; // Player 1 is X
    this.player2 = player2; // Player 2 is O
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.continue = true;
    this.moveCount = 0;
  }

  displayBoard() {
    console.log(`TIC-TAC-TOC Game, Created by Matt and Rick`);
    console.log(`Press "q" to quit or start a game! \n`);
    console.log(
      ` ${this.board[0]} | ${this.board[1]} | ${this.board[2]} \n-----------\n ${this.board[3]} | ${this.board[4]} | ${this.board[5]} \n-----------\n ${this.board[6]} | ${this.board[7]} | ${this.board[8]} \n`
    );
  }

  addMove(player, move) {
    this.board[move - 1] = player; // player is either X or O
    console.clear();
    this.displayBoard();
    console.log(`${player} made a move: ${move}`);
    this.moveCount += 1;

    if (this.hasWon(player)) {
      console.log(`Player ${player} has won`);
      this.continue = false;
    } else if (this.moveCount === 9) {
      this.isDraw();
    }
  }

  hasWon(player) {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal (top-left to bottom-right)
      [2, 4, 6], // Diagonal (top-right to bottom-left)
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] === player &&
        this.board[b] === player &&
        this.board[c] === player
      ) {
        return true; // Winner found
      }
    }

    return false; // No winner found
  }

  isDraw() {
    console.log("It's a draw");
    this.moveCount = 0;
    this.continue = false;
  }
}

module.exports = {
  Game,
};

// if (
//   this.board[0] + this.board[1] + this.board[2] === x0y ||
//   this.board[3] + this.board[4] + this.board[5] === x0y  ||
//   this.board[6] + this.board[7] + this.board[8] === x0y  ||
//   this.board[0] + this.board[3] + this.board[6] === x0y  ||
//   this.board[1] + this.board[4] + this.board[7] === x0y  ||
//   this.board[2] + this.board[5] + this.board[8] === x0y  ||
//   this.board[0] + this.board[4] + this.board[8] === x0y  ||
//   this.board[2] + this.board[4] + this.board[6] === x0y
// ) {
//   console.log(`Player ${x0y[0]} has won`);
//   this.continue = false;
// }
// } else if (
//   this.board[0] + this.board[1] + this.board[2] === "OOO" ||
//   this.board[6] + this.board[7] + this.board[8] === "OOO" ||
//   this.board[3] + this.board[4] + this.board[5] === "OOO" ||
//   this.board[0] + this.board[3] + this.board[6] === "OOO" ||
//   this.board[1] + this.board[4] + this.board[7] === "OOO" ||
//   this.board[2] + this.board[5] + this.board[8] === "OOO" ||
//   this.board[0] + this.board[4] + this.board[8] === "OOO" ||
//   this.board[2] + this.board[4] + this.board[6] === "OOO"
// ) {
//   console.log("Player 2 - O has won");
//   this.continue = false;
// }
