"use strict";
var filestream = require('fs');
var regExpression = /** @class */ (function () {
    function regExpression() {
    }
    regExpression.prototype.regexExpression = function (name, fullName, contact, answer) {
        /*reading the text file*/
        var content = filestream.readFileSync('regex.txt', 'utf8');
        /*replace user Name ,full name, contact and content*/
        content = content.replace(/<<name>>/g, name);
        content = content.replace(/<<full name>>/g, fullName);
        content = content.replace("xxxxxxxxxx", contact);
        content = content.replace("xx/xx/xxxx", answer);
        /*save updated text into the text file*/
        filestream.writeFileSync("regex.txt", content);
        console.log(content);
    };
    return regExpression;
}());
module.exports = regExpression;