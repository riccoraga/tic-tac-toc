import Game from "./gameMain.js";
import PlayerOne from "./playerOne.js";
import PlayerTwo from "./playerTwo.js";
//const prompt = require("prompt")();
//import Player from "./player.js";

class Start {
  constructor() {
    this.game = new Game();    
    this.playerOne = new PlayerOne
    this.playerTwo = new PlayerTwo
    this.startGame();
  }

  startGame() {
    this.game.displayBoard();
    this.playerOne.makeMove(this.game);
    this.playerTwo.makeMove(this.game)
  }
}
export default Start;   

start = new Start