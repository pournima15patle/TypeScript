"use strict";
exports.__esModule = true;
var filestream = require('fs');
var inventory1 = require("./inventUtility1");
var invent = new inventory1();
/*read the json file*/
var content = filestream.readFileSync('inventory1.json');
var object = JSON.parse(content);
console.log(object);
function inventory() {
    invent.inventory(object);
}
inventory();
