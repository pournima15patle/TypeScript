var readline = require('readline-sync');
var filestream = require('fs');

class Person {
    /**declaring variable private with types */
    private _firstName: string = null;
    private _lastName: string = null;
    private _contact: number = null;
    private _address: string = null;
    private _state: string = null;
    private _zip: number = null;

    constructor() {

    }
    // To fetch the firstName by getter method
    public getFirstName(): string {
        return this._firstName;
    }
    // To set the value of firstName by setter method
    public setFirstName(Name) {
        this._firstName = Name;
    }

    // To fetch the lastName by getter method
    public getLastName(): string {
        return this._lastName;
    }
    // To set the value of lastName by setter method
    public setLastName(lastName: string) {
        this._lastName = lastName;
    }


    public getContact(): number {
        return this._contact;
    }
    public setContact(contact: number) {
        this._contact = contact;
    }


    public getAddress(): string {
        return this._address;
    }
    public setAddress(address: string) {
        this._address = address;
    }


    public getState(): string {
        return this._state;
    }
    public setState(state: string) {
        this._state = state;
    }


    public getZip(): number {
        return this._zip;
    }
    public setZip(zip: number) {
        this._zip = zip;
    }

    getInteger(): number {
        let value1 = readline.questionInt("");
        return value1;
    }

    getString(): string {

        let value = readline.question("");
        return value;

    }

    data() {

        console.log('enter the first name:');
        var value1: string = this.getString();

        console.log('enter the last name:');
        var value2: string = this.getString();

        console.log('enter the address:');
        var value3: string = this.getString();

        console.log('enter the contact:');
        var value4: number = this.getInteger();

        console.log('enter the state:');
        var value5 = this.getString();

        console.log('enter the zip code:');
        var value6: number = this.getInteger();

        this.setFirstName(value1);
        this.setLastName(value2);
        this.setAddress(value3);
        this.setContact(value4);
        this.setState(value5);
        this.setZip(value6);

        console.log("gsdjrtfju", this._firstName);

    }

    address_book(object) {


        /*read the choice from user */
        var answer = readline.question("  Press \n 1.To add Person \n 2. To update Person \n 3. To delete Person \n 4. To sort the file by Zip \n 5. To sort the file by name \n 6. To display \n 7. To exit ");
        switch (answer) {
            case '1': this.addPerson(object);
                break;
            case '2': this.update(object);
                break;
            case '3': this.deleted(object);
                break;
            case '4': this.sortingZip(object);
                break;
            case '5': this.sortingName(object);
                break;
            case '6': this.displ(object);
                break;
            case '7': console.log("  Thank you  ");
                break;
            default: console.log("------wrong input------ ");
                this.address_book(object);
        }

    }
    //add person details
    addPerson(object) {
        this.data();
        try {
            object.person.push({
                First_name: this._firstName,
                Last_name: this._lastName,
                Contact: this._contact,
                Address: this._address,
                State: this._state,
                Zip: this._zip
            })
            filestream.writeFileSync('address.json', JSON.stringify(object));
            this.address_book(object)
        } catch (err) {
            console.log(err);

        }
    }



    /* display the person data */
    displ(object) {

        console.log(object);
        this.address_book(object);
    }



    /** for removing the person data which is present in address book */
    deleted(object) {
        var ans = readline.question("press \n1.choose name \n 2. choose contact number  ");
        /** Remove the person data from address book using name */
        try {
            if (ans == 1) {
                let res = readline.question("Enter first name of the person ")
                for (let i = 0; i < object.person.length; i++) {
                    if (object.person[i].First_name == res) {
                        var index = object.person.indexOf(object.person[i]);

                        object.person.splice(index, 1);
                    }
                }
                filestream.writeFileSync('address.json', JSON.stringify(object));
                this.address_book(object);

            }
            else if (ans == 2) {
                /** Remove the person data from address book using contact */
                let res = readline.question("Enter the mobile number of the person")
                for (let i = 0; i < object.person.length; i++) {
                    if (object.person[i].Contact == res) {
                        var index = object.person.indexOf(object.person[i]);
                        object.person.splice(index, 1);
                    }
                }
                /** Write the person data after removing person */
                filestream.writeFileSync('address.json', JSON.stringify(object));
                this.address_book(object);
            }
        } catch (err) {
            console.log(err);

        }
    }

    /** Sort the address book by using zipcode */
    sortingZip(object) {
        try {
            let refer = object.person;
            function sortbyzip(a, b) {
                return (a.Zip - b.Zip);
            }
            var result = refer.sort(sortbyzip);
            console.log(result);
            this.address_book(object);
        } catch (err) {
            console.log(err);

        }
    }


    /* Sort the address book using person name */
    sortingName(object) {
        try {
            let refer = object.person;
            function sortbyname(a, b) {
                if (a.First_name == b.First_name) {
                    return 0;
                }
                else if (a.First_name > b.First_name) {
                    return 1;
                }
                else if (a.First_name < b.First_name) {
                    return -1;
                }
            }
            let res = refer.sort(sortbyname);
            console.log(res);
            this.address_book(object);
        } catch (err) {
            console.log(err);

        }
    }



    /** Update the person data using update method */
    update(object) {
        let ans = readline.question("Enter the  name of the exsting person ");
        var count = 0;
        try {
            for (let i = 0; i < object.person.length; i++) {
                filestream.writeFileSync('address.json', JSON.stringify(object));
                if (object.person[i].First_name == ans || object.person[i].Contact == ans) {
                    count == 1;
                    var que = readline.question("\nPrees \n 1. To update First name \n 2. To update Last name \n 3. To update contact \n 4.To update state \n 5. To update Address \n 6. To update zip \n 7. To Exit  ");
                    if (que == 1) {
                        /* Update first Name of person */
                        let res = readline.question("Enter the new  First name of person ");
                        object.person[i].First_name = res;
                        this.save(object);
                        this.address_book(object);
                    }
                    else if (que == 2) {
                        /*Update last name of Person */
                        let res1 = readline.question("Enter the new Last name of the person  ");
                        object.person[i].Last_name = res1;
                        this.save(object);
                        this.address_book(object);
                    }
                    else if (que == 3) {
                        /*Update contact of Person */
                        let res2 = readline.question("Enter the new contact number  ");
                        object.person[i].Contact = res2;
                        this.save(object);
                        //filestream.writeFileSync('address.json', JSON.stringify(data));
                        this.address_book(object);
                    }
                    else if (que == 4) {
                        /*Update state of Person */
                        let res3 = readline.question("Enter the new state name ");
                        object.person[i].State = res3;
                        this.save(object);
                        this.address_book(object);
                    }
                    else if (que == 5) {
                        /*Update Address of Person */
                        let res4 = readline.question(" Enter the new address ");
                        object.person[i].Address = res4;
                        this.save(object);
                        this.address_book(object);
                    }
                    else if (que == 6) {
                        /*Update zip code of Person */
                        let res5 = readline.question("Enter the new zip ");
                        object.person[i].Zip = res5;
                        this.save(object);
                        this.address_book(object);
                    }
                    else if (que == 7) {
                        // return;;
                        this.address_book(object);
                    }
                    else {
                        console.log('invalid input');
                    }


                }
            }
        } catch (err) {
            console.log(err);

        }
        if (count == 0) {
            console.log('Person not found');
        }
    }


    /** save the data into the json file */
    save(object) {
        try {
            filestream.writeFileSync('address.json', JSON.stringify(object));
            this.update(object);
        } catch (err) {
            console.log(err);

        }
    }

} export =Person








