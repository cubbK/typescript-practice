"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figure = /** @class */ (function () {
    function Figure(points) {
        this.points = points;
    }
    Figure.prototype.getDistanceFrom2Points = function (point1, point2) {
        var firstPow = Math.pow((point1.x - point2.x), 2);
        var secondPow = Math.pow((point1.y - point2.y), 2);
        return Math.abs(Math.round(Math.sqrt(firstPow + secondPow)));
    };
    return Figure;
}());
exports.default = Figure;
