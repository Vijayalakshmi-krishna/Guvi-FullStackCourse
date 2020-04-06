"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(animal_val) {
        this.age = animal_val.age;
        this.name = animal_val.name;
    }
    Animal.prototype.makeSound = function (sound) {
        console.log("My name is " + this.name + " ;My age is " + this.age + " and I make the sound " + sound);
    };
    return Animal;
}());
exports.Animal = Animal;
