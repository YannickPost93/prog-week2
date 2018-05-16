"use strict";
var Car = (function () {
    function Car() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.xspeed = 1;
        this.yspeed = 1;
        console.log("car created");
        this.element = document.createElement("car");
        document.body.appendChild(this.element);
        this.xspeed = 3 + Math.random();
        this.yspeed = 3 + Math.random();
    }
    Car.prototype.update = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > window.innerWidth || this.x < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y > window.innerHeight || this.y < 0) {
            this.yspeed = this.yspeed * -1;
        }
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.cars = [];
        for (var i = 0; i < 200; i++) {
            var c = new Car();
            this.cars.push(c);
            c.update();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map