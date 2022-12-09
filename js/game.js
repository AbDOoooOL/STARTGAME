/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />
var Game = /** @class */ (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = "";
        /// create the html for the current game
        for (var i = 0; i < this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="asnwer' + i + '"class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + '<label>';
            gameForm += '<div class="col-sm-1"> <input type="text"  class="form-control" id="asnwer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        // enable the calculator score button
        document.getElementById('calculate').removeAttribute('display');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        // loop throug the next boxes and calculate the number that are currect
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        //create a new result object to pass to the scoreboard
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        //add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScpreboard();
        // disble the calculate score button
        document.getElementById('calculate').setAttribute('disaled', 'true');
    };
    return Game;
}());
