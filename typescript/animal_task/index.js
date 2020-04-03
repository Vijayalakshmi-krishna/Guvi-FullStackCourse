"use strict";
//exports.__esModule = true;
var animaltable = document.getElementById("animaltable");
var row;
var Cat = /** @class */ (function () {
    function Cat(catName) {
        var _this = this;
        this.clickCat = function () {
            return function () { alert(_this.name + " is clicked"); };
        };
        this.name = catName;
        var catImage = document.createElement("img");
        catImage.src = 'https://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg';
        catImage.style.cursor = "pointer";
        catImage.style.width = "200px";
        var row = animaltable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.append(catImage);
        catImage.onclick = this.clickCat();
        document.body.appendChild(animaltable);
    }
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog(name) {
        var _this = this;
        this.clickDog = function () {
            return function () {
                alert(_this.name + " is clicked");
            };
        };
        this.name = name;
        var dogImage = document.createElement("img");
        dogImage.src = 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg';
        dogImage.style.cursor = "pointer";
        dogImage.style.width = "200px";
        row = animaltable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell2.append(dogImage);
        dogImage.onclick = this.clickDog();
        document.body.appendChild(animaltable);
    }
    return Dog;
}());
var createCat = function () {
    var name = prompt("give a cat name:");
    new Cat(name);
};
var createDog = function () {
    var name = prompt("give a dog name:");
    new Dog(name);
};
