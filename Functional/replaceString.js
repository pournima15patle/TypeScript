"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Util = require("./util");
// import replace as util from '../Functional/replaceString'
var u1 = new Util();
var string1 = readline.question("Enter the String ");
var string2 = readline.question("Enter the string where you want to replace the username:");
var name = readline.question("Enter your userName:");
u1.replaceString(string1, string2, name);
