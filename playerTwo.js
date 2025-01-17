// Class Player Two
import Player from './player.js'
class PlayerTwo extends Player {
  constructor() {
    super('O')    
  }
  makeMove() {
    super.makeMove(this.move);
  }
}

export default PlayerTwo