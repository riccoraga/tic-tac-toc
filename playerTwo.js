// Class Player Two
class PlayerTwo extends Player {
  constructor(player, move) {
    super(player);
    this.move = move;
  }

  makeMove() {
    super.makeMove(this.move);
  }
}
