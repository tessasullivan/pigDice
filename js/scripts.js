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
  if(this.getCurrentPlayer().totalScore + this.turnScore >=  10) {
    this.gameOver = true;
  }
  return this.gameOver;
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

 // Figure out who has the turnScore and set
  var player1TurnScore = 0;
  var player2TurnScore = 0;
  if (game.getCurrentPlayer().playerNumber === "Player 1"){
    player1TurnScore = game.turnScore;
  } else {
    player2TurnScore = game.turnScore;
  }

  $("#playerName").text(game.getCurrentPlayer().playerNumber);
  $("#turnScore").text(game.turnScore);
  //
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + ": " +  " " + "Total Score: " + player.totalScore + "</li>";
  });

  scoreBoard.html(htmlForScoreBoard);

}



$().ready(function() {

  $('button#roll').click(function() {
    // roll die, check if game is over
    // if over, hide the dice and buttons and announce winner

    var rollResult = rollDie();
    var results = game.turn(rollResult);
    var endGame = game.checkForWin();
    if (endGame) {
      // Hide the die form and announce winner
      $(".container").hide();
      console.log(game.getCurrentPlayer());
      $('#result').text("Winner is " + game.getCurrentPlayer().playerNumber);
    } else {
      // keep playing
      $('#result').text(results);
      $('#die1').text(rollResult);
    }

  });
  $('button#hold').click(function() {
    game.hold();
  });
  $("button").click(function() {
    displayScore(game);
  })
});
