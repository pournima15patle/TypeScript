import * as readline from 'readline-sync';
import Util = require('./util')
var u1 = new Util();
var string1 = readline.question("Enter the String ");

var string2 = readline.question("Enter the string where you want to replace the username:");

var name = readline.question("Enter your userName:");
try {
    u1.replaceString(string1, string2, name);
} catch (err) {
    console.log(err);

}
