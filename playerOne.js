// Class Player One

const { Player } = require("./player")

class PlayerOne extends Player {
  constructor(game) {
    super('X', game)    
  }

  makeMove() {
    super.makeMove();
  }
}

module.exports = {
  PlayerOne
}

//export default PlayerOne