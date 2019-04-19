/**
  * @Purpose   :To Create a JSON file having Inventory Details for Rice, Pulses and Wheats
  *             with properties name, weight, price per kg.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 18-03-2019
  **/
import * as readline from 'readline-sync';
var filestream = require('fs');
import inventory1 = require('./inventUtility1');
var invent = new inventory1();
/*read the json file*/
var content = filestream.readFileSync('inventory1.json');
var object = JSON.parse(content);
console.log(object);

function inventory() {
  try {
    invent.inventory(object);
  } catch (err) {
    console.log(err);

  }
} inventory();