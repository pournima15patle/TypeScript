import * as readline from 'readline-sync';

import Util = require('./algoUtility')
var u1 = new Util();
var arr1 = [];
var size = readline.question("enter size of array:")
console.log("enter array elements");
// read the elements in array 

try {
  for (var i = 0; i < size; i++) {
    arr1[i] = readline.question("enter element on " + i + " position:");
  }
  var arr = u1.bubbleSort(arr1, size);
  console.log("Sorted Array ");
  console.log(arr);
} catch (err) {
  console.log(err);

}