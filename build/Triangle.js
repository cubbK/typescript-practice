"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Figure_1 = require("./Figure");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dist1 = _this.getDistanceFrom2Points(_this.points[0], _this.points[1]);
        _this.dist2 = _this.getDistanceFrom2Points(_this.points[1], _this.points[2]);
        _this.dist3 = _this.getDistanceFrom2Points(_this.points[0], _this.points[2]);
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.dist1 + this.dist2 + this.dist3;
    };
    Triangle.prototype.aria = function () {
        var p = (this.dist1 + this.dist2 + this.dist3) / 2;
        var firstDif = p - this.dist1;
        var secondDif = p - this.dist2;
        var thirdDif = p - this.dist3;
        var final = Math.sqrt(p * firstDif * secondDif * thirdDif);
        return final;
    };
    return Triangle;
}(Figure_1.default));
exports.default = Triangle;
