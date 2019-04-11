function Game () {
  this.players = [], //some number of players
  this.currentPlayer = 0, //index of current player, 0 or 1
  // this.turnScore = 0,
  this.roll = 0
}

Game.prototype.addPlayer = function (player) {
  this.players.push(player);
}

// game.players[0] = player1, [1] = player2
// this method switches the player whose turn it is
Game.prototype.setPlayer = function(){
  if (this.currentPlayer === 0) {
    this.currentPlayer = 1;
  } else {
    this.currentPlayer = 0;
  }
}

Game.prototype.turn = function(die1) {
  if (die1 === 1) {
    game.players[game.currentPlayer].turnScore = 0;
    this.setPlayer();
  } else {
    game.players[game.currentPlayer].turnScore += die1;

    // this.turnScore += die1;
  }
  console.log(this.currentPlayer + " " + game.players[game.currentPlayer].turnScore);
}

function Player (playerNumber, turnScore, totalScore) {
  this.playerNumber = playerNumber,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}
// User chooses to hold
Player.prototype.hold = function() {
  this.totalScore += game.players[game.currentPlayer].turnScore;
  console.log(this.totalScore);
}

function rollDie() {
  var die1 = Math.floor(Math.random() * 6) + 1;
  return die1;
}
// User logic
function displayScore (gameToDisplay) {
  var scoreBoard = $("ul#displayScore");
  var htmlForScoreBoard = "";
  game.players.forEach(function(player) {
    htmlForScoreBoard += "<li>" + " " + player.playerNumber + ": " + "Turn Score: " + player.turnScore + " " + "Total Score: " + player.totalScore + "</li>";
  });
  scoreBoard.html(htmlForScoreBoard);
}

var game = new Game();

var player1 = new Player("Player 1", 0, 0);
var player2 = new Player("Player 2", 0, 0);

game.addPlayer(player1);
game.addPlayer(player2);

console.log(game.players);

//  [{playernumber: "Player2"}, player2]

// while (player1.totalScore < 100 && player2.totalScore < 100){
//   var die1 = game.players[game.currentPlayer].rollDie();
//   game.turn(die1);
// }


$().ready(function() {

  $('button#roll').click(function() {
    var die1 = rollDie();

    game.turn(die1);

    displayScore (game);
    // $('#result').text(results);
    $('#die1').text(die1);
  });

  $('button#hold').click(function() {
    game.players[game.currentPlayer].hold();
  });
});
