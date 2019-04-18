var filestream=require('fs');
import Doctor=require('./clinic')
var content=filestream.readFileSync('clinic.json');
var object=JSON.parse(content);

export class Main{
    
     D1:Doctor=new Doctor(object);

}