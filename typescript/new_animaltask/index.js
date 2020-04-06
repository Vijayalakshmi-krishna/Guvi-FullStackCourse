"use strict";
exports.__esModule = true;
var cat_1 = require("./cat");
var dog_1 = require("./dog");
var myCat = new cat_1.Cat({ age: 7, name: "cat1" });
var mydog = new dog_1.Dog({ age: 5, name: "dog1" });
myCat.makeSound("meow-meow");
mydog.makeSound("bow-bow");
