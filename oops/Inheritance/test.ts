// abstract class with abstract property

abstract class Person2 {
    abstract name: string;

    display(): void{
        console.log(this.name);

    }
}

class Employee extends Person { 
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