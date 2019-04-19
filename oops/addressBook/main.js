"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abc = /** @class */ (function () {
    function abc() {
    }
    abc.prototype.show = function () {
        console.log("this is abc");
    };
    abc.prototype.show1 = function () {
        console.log("this is helper method");
        this.show();
    };
    return abc;
}());
var pqr = /** @class */ (function (_super) {
    __extends(pqr, _super);
    function pqr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pqr.prototype.add = function () {
        console.log("addition " + (2 + 3));
    };
    return pqr;
}(abc));
exports.pqr = pqr;
var c1 = new pqr();
c1.show1();
