import * as readline from 'readline-sync';

import Util = require('./algoUtility')
var u1 = new Util();
var arr = [];
var size = readline.question("enter size of array:");
console.log("enter array elements");
// read the elements in array 

try {
  for (var i = 0; i < size; i++) {
    arr[i] = readline.question("enter element on " + i + "th position:");
  }
  var arr1 = u1.mergeSort(arr);
  console.log("Sorted Array ");
  console.log(arr1);
} catch (err) {
  console.log(err);

}