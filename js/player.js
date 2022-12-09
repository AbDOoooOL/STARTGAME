/// <reference path="person.ts" />
var Player = /** @class */ (function () {
    function Player() {
        this.name = "";
        this.age = 0;
        this.highScore = 0;
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
