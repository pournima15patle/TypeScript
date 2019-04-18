var readline = require('readline-sync');
var filestream = require('fs');
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = null;
        this._lastName = null;
        this._contact = null;
        this._address = null;
        this._state = null;
        this._zip = null;
    }
    // To fetch the firstName by getter method
    Person.prototype.getfirstName = function () {
        return this._firstName;
    };
    // To set the value of firstName by setter method
    Person.prototype.setfirstName = function (firstName) {
        this._firstName = readline.question('enter firstname');
    };
    // To fetch the lastName by getter method
    Person.prototype.getlastName = function () {
        return this._lastName;
    };
    // To set the value of lastName by setter method
    Person.prototype.setlastName = function (lastName) {
        this._lastName = lastName;
    };
    Person.prototype.getcontact = function () {
        return this._contact;
    };
    Person.prototype.setcontact = function (contact) {
        this._contact = contact;
    };
    Person.prototype.getaddress = function () {
        return this._address;
    };
    Person.prototype.setaddress = function (address) {
        this._address = address;
    };
    Person.prototype.getstate = function () {
        return this._state;
    };
    Person.prototype.setstate = function (state) {
        this._state = state;
    };
    Person.prototype.getzip = function () {
        return this._zip;
    };
    Person.prototype.setzip = function (zip) {
        this._zip = zip;
    };
    Person.prototype.addPerson = function (data) {
        data.person.push({
            First_name: this.getfirstName(),
            Last_name: this.getlastName(),
            Contact: this.getcontact(),
            Address: this.getaddress(),
            State: this.getstate(),
            Zip: this.getzip()
        });
        this.setfirstName(this._firstName);
        console.log(this.getfirstName);
    };
    return Person;
}());
// export class Operation extends Person{
//      P1:Person=new Person();
//      P1.firstName()
// }
// //    var  P1=new Person();
// //     addPerson(data){
// //         data.person.push({
// //             First_name:P1.firstName(),
// //             Last_name: lastname,
// //             Contact: contact,
// //             Address: address,
// //             State: state,
// //             Zip: zip
// //         })
// //         /*Store the data in json file */
// //         filestream.writeFileSync('address.json', JSON.stringify(data));
// //         this.address_book(data);
