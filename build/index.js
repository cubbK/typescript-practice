"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figure_1 = require("./figure");
var point1 = {
    x: 12,
    y: 5
};
var point2 = {
    x: 5,
    y: 4
};
var point3 = {
    x: 17,
    y: 4
};
var square = new figure_1.default([point1, point2, point3]);
square.perimeter();
