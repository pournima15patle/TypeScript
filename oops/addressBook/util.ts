var read = require('readline-sync');
class Utility {
getString(): string {

    let value = read.question("enter value");
    return value;
    
    }

getInteger():number{
let value1=read.questionInt("");
return value1;
}    


}export=Utility