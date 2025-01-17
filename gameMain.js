class Game {
    constructor(player1, player2) {
        this.player1 = player1 //Player 1 is X
        this.player2 = player2 //Player 2 is O
    }

    board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    displayBoard() {
        console.log(` ${this.board[0]} | ${this.board[1]} | ${this.board[2]} \n-----------\n ${this.board[3]} | ${this.board[4]} | ${this.board[5]} \n-----------\n ${this.board[6]} | ${this.board[7]} | ${this.board[8]} \n`)
    }

    addMove(number, player) {
        this.board[number - 1] = player //player is either X or O
        console.clear()
        this.displayBoard()
    }

    

}

export default Game;

// module.exports = {
//     Game
// }