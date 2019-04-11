//Business logic

// Game method for advance
// Game method for stop
// turnScore moves to become a property of Game
// player just needs total score

function Game () {
  this.players = [],
  this.turnScore = 0,
  this.roll = 0,
  this.currentPlayerIndex = 0;
  this.numberOfPlayers = 0;
  this.gameOver = false;
}

Game.prototype.addPlayer = function (newPlayer) {
  // player.id = this.assignId();
  this.players.push(newPlayer);
  this.numberOfPlayers++;
}

Game.prototype.getCurrentPlayer = function() {
  return this.players[this.currentPlayerIndex];
}

//method that advances to next player
Game.prototype.nextPlayer = function() {
  if (this.currentPlayerIndex === this.numberOfPlayers-1) {
    this.currentPlayerIndex = 0;
  } else {
    this.currentPlayerIndex++;
  }
  this.turnScore = 0;
}

// returns whose turn it is
Game.prototype.turn = function(roll) { //performs logic, returns if same pla
  if (roll === 1) {
    this.nextPlayer();
    // return "Your turn is OVER";
  } else {
    this.turnScore += roll;
  }
}

Game.prototype.checkForWin = function() {
  if(this.getCurrentPlayer().totalScore + this.turnScore >=  100) {
    this.gameOver = true;
  }
}

// User chooses to hold
Game.prototype.hold = function() {
  this.getCurrentPlayer().totalScore += this.turnScore;
  this.nextPlayer();
}

function Player (playerNumber, totalScore) {
  //maybe this is right?
  this.playerNumber = playerNumber,
  this.totalScore = totalScore
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// User logic
// Player 1 rolls die, if 1 turn ends, otherwise temp score = die
var game = new Game();
game.addPlayer(new Player("Player 1", 0, 0));
game.addPlayer(new Player("Player 2", 0, 0));
console.log(game);


function displayScore(gameToDisplay) {
  var scoreBoard = $("ul#displayScore");
  var htmlForScoreBoard = "";
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + ": " + "Turn Score: " + game.turnScore + " " + "Total Score: " + player.totalScore + "</li>";
  });
  scoreBoard.html(htmlForScoreBoard);
  $("#playerName").text(game.getCurrentPlayer().playerNumber);
}



$().ready(function() {

  $('button#roll').click(function() {
    var rollResult = rollDie();
    var results = game.turn(rollResult);
    $('#result').text(results);
    $('#die1').text(rollResult);
  });
  $('button#hold').click(function() {
    game.hold();
  });
  $("button").click(function() {
    displayScore(game);
  })
});
