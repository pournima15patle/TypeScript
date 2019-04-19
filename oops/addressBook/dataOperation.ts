import Person = require('./personInfo');
var filestream = require('fs');

var content: any = filestream.readFileSync('address.json');
var object: any = JSON.parse(content);

var p1 = new Person();
try {
    p1.address_book(object)
} catch (err) {
    console.log(err);

}