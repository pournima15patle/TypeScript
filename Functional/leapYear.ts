import * as readline from 'readline-sync';

import Util=require('./util')
var u1=new Util();

var year=readline.question('Enter the year:');
console.log(year);
if(year>=999 && year<=9999)
{
     u1.checkLeapYear(year);
}
else
{
    console.log("Please, Enter Proper year");
}
