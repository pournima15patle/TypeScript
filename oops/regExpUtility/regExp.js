"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
//import { stringify } from 'querystring';
var regexExpression = require('./regExpUtility');
var reg = new regexExpression();
function regex() {
    /*read the name of user and validate it*/
    var name = readline.question('Enter your name :');
    while (isNaN(name) == false) {
        console.log('please, Re-enter your name');
        var name = readline.question("Enter your name :");
    }
    /*read the full name and validate it*/
    var fullName = readline.question('Enter your full name');
    while (isNaN(fullName) == false) {
        console.log('please, Re-enter your full name');
        var fullName = readline.question("Enter your full name :");
    }
    /*reading the contact and validate it*/
    var contact = readline.question('Enter your mobile number:');
    while (isNaN(contact) == true || contact.length != 10) {
        console.log("Please, Re-enter your mobile number ");
        var contact = readline.question("Enter your mobile number ");
    }
    /* create the object of date for taking the date */
    var date = new Date();
    var answer = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    console.log(answer);
    reg.regexExpression(name, fullName, contact, answer);
}
regex();
