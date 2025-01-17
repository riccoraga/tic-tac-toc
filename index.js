//import Game from "./gameMain.js";
//import PlayerOne from "./playerOne.js";
//import PlayerTwo from "./playerTwo.js";
//const prompt = require("prompt")();
//import Player from "./player.js";

const { Game } = require('./gameMain')
const { PlayerOne } = require('./playerOne')
const { PlayerTwo } = require('./playerTwo')

class Start {
  constructor() {
    this.game = new Game();    
    this.playerOne = new PlayerOne(this.game)
    this.playerTwo = new PlayerTwo(this.game)
    this.startGame();
  }

  startGame() {
    this.game.displayBoard();
    this.playerOne.makeMove(this.game);
    this.playerTwo.makeMove(this.game)
  }
} 

start = new Start