"use strict";
var read = require('readline-sync');
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.getString = function () {
        var value = read.question("enter value");
        return value;
    };
    Utility.prototype.getInteger = function () {
        var value1 = read.questionInt("");
        return value1;
    };
    return Utility;
}());
module.exports = Utility;
