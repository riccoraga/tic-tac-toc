// Class Player One
class PlayerOne extends Player {
  constructor(player, move) {
    super(player);
    this.move = move;
  }

  makeMove() {
    super.makeMove(this.move);
  }
}
