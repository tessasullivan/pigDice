//////////////////
//Business logic

function Game () {
  this.players = [],
  this.turnScore = 0,
  this.roll = 0,
  this.currentPlayerIndex = 0;
  this.numberOfPlayers = 0;
  this.gameOver = false;
}

// Method adds player to game object
Game.prototype.addPlayer = function (newPlayer) {
  this.players.push(newPlayer);
  this.numberOfPlayers++;
}

// Method to get the current player from the game object
Game.prototype.getCurrentPlayer = function() {
  return this.players[this.currentPlayerIndex];
}

// Method that advances to next player
// and sets turnScore to 0
Game.prototype.nextPlayer = function() {
  if (this.currentPlayerIndex === this.numberOfPlayers-1) {
    this.currentPlayerIndex = 0;
  } else {
    this.currentPlayerIndex++;
  }
  this.turnScore = 0;
}

// Method determines whose turn it is based on roll results
Game.prototype.turn = function(roll) {
  if (roll === 1) {
    this.nextPlayer();
  } else {
    this.turnScore += roll;
  }
}

// Method which checks whether or not the winning score has been reached
Game.prototype.checkForWin = function() {
  if(this.getCurrentPlayer().totalScore + this.turnScore >=  100) {
    this.gameOver = true;
  }
}

// Method which adds turn score to player's total score and advances to the next player
Game.prototype.hold = function() {
  this.getCurrentPlayer().totalScore += this.turnScore;
  this.nextPlayer();
}

// Player constructor
function Player (playerNumber, totalScore) {
  this.playerNumber = playerNumber,
  this.totalScore = totalScore
}

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

////////////////////////////////////////////
// User logic
// Instantiate the game and add the players
var game = new Game();
game.addPlayer(new Player("Player 1", 0, 0));
game.addPlayer(new Player("Player 2", 0, 0));
//console.log(game);

// Displays the score for both players as well as whose turn it is
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
    // roll die, check if game is over
    // if over, hide the dice and buttons and announce winner

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
