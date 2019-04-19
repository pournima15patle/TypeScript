import * as readline from 'readline-sync';

import Util = require('./util')
var u1 = new Util();
var $stake = readline.question("Enter the $stake value:");

var $goal = readline.question("Enter the $goal value:");

var totalTimes = readline.question("Enter total of trials:");
try {
    u1.gambler($stake, $goal, totalTimes);
} catch (err) {
    console.log(err);

}