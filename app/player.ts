/// <reference path="person.ts" />

class Player implements Person{
    name: string = "";
    age: number = 0;
    highScore: number = 0;

    formatName(){
        return this.name.toUpperCase();
    }
}