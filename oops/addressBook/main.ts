class abc{
    private show(){
        console.log("this is abc");
        
    }

    public show1(){
        console.log("this is helper method");
        this.show();
    }
}
export class pqr extends abc{
    
add(){
    console.log("addition " +(2+3));
    
}
}
var c1=new pqr();
c1.show1();

// addPerson(data) {
//     data.person.push({
//         First_name: this._firstName,
//         Last_name: this._lastName,
//         Contact: this._contact,
//         Address: this._address,
//         State:this._state,
//         Zip: this._zip
//     })

// }

******************************************
class Person12 {

    private _firstName: string =null
    private _lastName: string = null
    private _contact: number = null
    private _address: string = null
    private _state: string = null
    private _zip: number = null

    constructor() {
        
    }
    // To fetch the firstName by getter method
    public get firstName(): string {
        return this._firstName;
    }
    // To set the value of firstName by setter method
    public set firstName(firstName) {
        this._firstName = firstName;
    }

    // To fetch the lastName by getter method
    public get lastName():string
    {
        return this._lastName;
    }
    // To set the value of lastName by setter method
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }


    public get contact():number
    {
        return this._contact;
    }
    public set contact(contact:number){
        this._contact=contact;
    }


    public get address():string{
        return this._address;
    }
    public set address(address:string){
        this._address=address;
    }


    public get state():string{
        return this._state;
    }
    public set state(state:string){
        this._state=state;
    }


    public get zip():number{
        return this._zip;
    }
    public set zip(zip:number){
        this._zip=zip;
    }


    // abstract class with abstract property

abstract class Person2 {
    abstract name: string;

    display(): void{
        console.log(this.name);

    }
}

class Employee extends Person12 { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(); // must call super()
        
        this.empCode = code;
        this.name = name;
    }
}

let emp: Person2 = new Employee("James", 100);
emp.display(); //James

//getters and Setters
class Person1 {
 
    private _name:string = null;
 
    constructor() {
 
    }
 
    public get name():string
    {
        return "The person name is " + this._name;
    }
 
    public set name(value:string)
    {
        this._name = value;
    }
 
}

}