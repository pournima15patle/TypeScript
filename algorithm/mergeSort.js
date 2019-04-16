"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var Util = require("./algoUtility");
var u1 = new Util();
var arr = [];
var size = readline.question("enter size of array:");
console.log("enter array elements");
// read the elements in array 
for (var i = 0; i < size; i++) {
    arr[i] = readline.question("enter element on " + i + "th position:");
}
var arr1 = u1.mergeSort(arr);
console.log("Sorted Array ");
console.log(arr1);
