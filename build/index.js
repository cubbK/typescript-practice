"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./Triangle");
var point1 = {
    x: 5,
    y: 1
};
var point2 = {
    x: 10,
    y: 1
};
var point3 = {
    x: 7,
    y: 10
};
var myTriangle = new Triangle_1.default([point1, point2, point3]);
console.log('Triangle aria: ' + myTriangle.aria());
console.log('Triangle perimeter:', +myTriangle.perimeter());
