"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Util = require("./util");
var u1 = new Util();
var $stake = readline.question("Enter the $stake value:");
var $goal = readline.question("Enter the $goal value:");
var totalTimes = readline.question("Enter total of trials:");
u1.gambler($stake, $goal, totalTimes);
