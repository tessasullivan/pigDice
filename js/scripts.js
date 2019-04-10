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
    this.turnScore += die1;
    return "You can go again";
  }
}

// User chooses to hold
Player.prototype.hold = function() {
  this.totalScore += game.turnScore;
  console.log(this.totalScore);
}

function Player (playerNumber, totalScore) {
  //maybe this is right?
  // this.player1 = player1,
  // this.player2 = player2,
  this.playerNumber = playerNumber,
  this.totalScore = totalScore
}



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


function displayScore (gameToDisplay) {
  var scoreBoard = $("ul#displayScore");
  var htmlForScoreBoard = "";
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + ": " + "Turn Score: " + game.turnScore + " " + "Total Score: " + player.totalScore + "</li>";
  });
  scoreBoard.html(htmlForScoreBoard);
}



$().ready(function() {


  $('button#roll').click(function() {
    var die1 = rollDie();

    var results = game.turn(die1);

    displayScore (game);
    $('#result').text(results);
    $('#die1').text(die1);
  });

  $('button#hold').click(function() {
    player1.hold();
  });
});
