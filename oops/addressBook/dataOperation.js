"use strict";
exports.__esModule = true;
var Person = require("./personInfo");
var filestream = require('fs');
var content = filestream.readFileSync('address.json');
var object = JSON.parse(content);
var p1 = new Person();
p1.address_book(object);
