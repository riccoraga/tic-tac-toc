// Class Player Two
//import Player from './player.js'

const { Player } = require("./player")

class PlayerTwo extends Player {
  constructor(game) {
    super('O', game)    
  }
  makeMove() {
    super.makeMove(this.move);
  }
}

module.exports= {
 PlayerTwo
}

//export default PlayerTwo