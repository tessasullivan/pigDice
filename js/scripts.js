//Business logic

// Game method for advance
// Game method for stop
// turnScore moves to become a property of Game
// player just needs total score



function Game () {
  this.players = [],
  this.turnScore = 0,
  this.roll = 0
  // this.currentId = 0
}

Game.prototype.addPlayer = function (player) {
  // player.id = this.assignId();
  this.players.push(player);
}

// returns whose turn it is
Game.prototype.turn = function(die1) {
  if (die1 === 1) {
    this.turnScore = 0;
    return "Your turn is OVER";
  } else {
    this.turnScore += this.roll;
    return "You can go again";
  }
}

function Player (playerNumber, totalScore) {
  this.playerNumber = playerNumber,
  this.totalScore = totalScore

}

// function turnScore ()


Player.prototype.increaseScore = function(points) {
  return this.totalScore += points;
}



function rollDie() {
  var die1 = Math.floor(Math.random() * 6) + 1;
  return die1;
}



// User logic
// Player 1 rolls die, if 1 turn ends, otherwise temp score = die
var game = new Game();
var player1 = new Player(
  playerNumber = "Player 1",
  totalScore = 0
);
var player2 = new Player(
  playerNumber = "Player 2",
  totalScore = 0
);

game.addPlayer(player1);
game.addPlayer(player2);


// function playGame () {
//   // while both total scores are less than 100
//   // Player rolls die
//   // Games displays result
//   // if die roll is 1, play moves to next player and no points are added to initial player
//   // else game gives user option to hold or roll again
//   // if user holds, then their total score increases by the turn score
//   // else
// }


function displayScore (gameToDisplay) {
  var scoreBoard = $("ul#displayScore");
  var htmlForScoreBoard = "";
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + " " + player.turnScore + " " + player.totalScore + "</li>";
  });
  scoreBoard.html(htmlForScoreBoard);
}



$().ready(function() {

  $('form#pigDice').submit(function(event) {
    event.preventDefault();
    var die1 = rollDie();

    var results = game.turn(die1);
//    displayScore (game);
    $('#result').text(results);
    $('#die1').text(die1);
  });

});
