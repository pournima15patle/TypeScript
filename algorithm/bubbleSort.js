"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Util = require("./algoUtility");
var u1 = new Util();
var arr1 = [];
var size = readline.question("enter size of array:");
console.log("enter array elements");
// read the elements in array 
for (var i = 0; i < size; i++) {
    arr1[i] = readline.question("enter element on " + i + " position:");
}
var arr = u1.bubbleSort(arr1, size);
console.log("Sorted Array ");
console.log(arr);
