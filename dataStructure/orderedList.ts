/**
  * @Purpose   :To create ordered linked list and perform operation like add, remove.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 13-03-2019
  **/

var LinkedList = require('./dsUtility/linkedList');
var filestream = require('fs');
var readline = require('readline-sync');
var writeUtil = require('./writeFile');
try {
    function ordered() {

        var string: string = filestream.readFileSync('num.txt', 'utf8');
        var arr: any = string.split(' ');
        //console.log(arr);
        var ord = new LinkedList();
        console.log('linked list element after sorting');
        arr = writeUtil.insertionSortInt(arr);
        //console.log(arr);

        for (let i = 0; i < arr.length; i++) {
            ord.add(Number(arr[i]));
        }
        ord.show();

        var answer = readline.question("Enter the number do you want to search ");
        if (!isNaN(answer)) {

            if (ord.search(answer)) {
                ord.remove(answer);
            }
            else {
                ord.add(answer);
                // ord.addAscending();
                //ord.util1.insertionSortInt(arr);
            }
        }

        ord.show();
        var num = ord.getData();
        writeUtil.writeFile('num.txt', num);
        console.log("The linked list elements are ");
        ord.show();
    }

    ordered();
}
catch (err) {
    console.log(err);
}