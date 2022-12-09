/// <reference path="player.ts" />
/// <reference path="game.ts" />
var newGame;
// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.name = Utility.getInputValue('playername');
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
