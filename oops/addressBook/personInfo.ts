var readline = require('readline-sync');
var filestream = require('fs');
import Utility=require('./util');
var u1=new Utility();

class Person {

    private _firstName: string = null;
    private _lastName: string = null;
    private _contact: number = null;
    private _address: string = null;
    private _state: string = null;
    private _zip: number = null;

    constructor() {
        
    }
    // To fetch the firstName by getter method
    public getfirstName(): string {
        return this._firstName;
    }
    // To set the value of firstName by setter method
    public setfirstName(firstName: string) {
        this._firstName = firstName;
    }

    // To fetch the lastName by getter method
    public getlastName():string
    {
        return this._lastName;
    }
    // To set the value of lastName by setter method
    public setlastName(lastName: string) {
        this._lastName = lastName;
    }


    public getcontact():number
    {
        return this._contact;
    }
    public setcontact(contact:number){
        this._contact=contact;
    }


    public getaddress():string{
        return this._address;
    }
    public setaddress(address:string){
        this._address=address;
    }


    public getstate():string{
        return this._state;
    }
    public setstate(state:string){
        this._state=state;
    }


    public getzip():number{
        return this._zip;
    }
    public setzip(zip:number){
        this._zip=zip;
    }


   
    this.addPerson(data) {
        data.person.push({
            First_name: this.getfirstName(),
            Last_name: this.getlastName(),
            Contact: this.getcontact(),
            Address: this.getaddress(),
            State: this.getstate(),
            Zip: this.getzip()
        })
    
    }


}
    

    
    
    
    


