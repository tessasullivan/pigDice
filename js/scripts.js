//Business logic

function Game () {
  this.players = [],
  this.currentId = 0
}

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.findPlayer = function(id) {
  for(var i=0; i< this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.contacts[i];
      }
    }
  }
  return false;
}

function Player (playerNumber, turnScore, totalScore) {
  this.playerNumber = playerNumber,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

// Player.prototype.increaseScore = function(points) {
//   return this.score += points;
// }

function rollDie () {
  var die1 = Math.floor(Math.random() * 6) + 1;
  return die1;
}



// User logic
// Player 1 rolls die, if 1 turn ends, otherwise temp score = die
var game = new Game();
var player1 = new Player(
  playerNumber = "Player 1",
  turnScore = 0,
  totalScore = 0
);
var player2 = new Player(
  playerNumber = "Player 2",
  turnScore = 0,
  totalScore = 0
);

game.addPlayer(player1);
game.addPlayer(player2);


function displayScore (gameToDisplay) {
  var scoreBoard = $("ul#displayScore");
  var htmlForScoreBoard = "";
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + " " + player.turnScore + " " + player.totalScore + "</li>";
  });
}


$().ready(function() {
  $('form#pigDice').submit(function(event) {
    event.preventDefault();

    displayScore (game);

  });

});
