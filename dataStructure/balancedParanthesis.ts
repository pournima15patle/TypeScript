/**
  * @Purpose   :To check the paranthesis balanced or not by using stack.
  * @author    : pournima15patle
  * @version   : 1.0
  * @since     : 
  **/

 var Stack = require('./dsUtility/stack');
 var readline = require('readline-sync');

 function balanced() {
     try {
     var st = new Stack();
     var str = readline.question("Enter your mathematical expression with parantheses ");
     var ch, i;

     for (i = 0; i <= str.length; i++) {
         ch = str.charAt(i);

         if (ch == '(' || ch == '[' || ch == '{') {
             st.push(ch); //push '(','['and '{' in to the stack if its occure in expression

         }
         else {
             switch (ch) {
                 case ')': if (st.pop() != '(') { //Pop '(', if case have a choice ')'.

                     return false;
                 }
                     break;
                 case ']': if (st.pop() != '[') { //Pop '[' , if case have a choice ']'.
                     return false;
                 }
                     break;
                 case '}': if (st.pop() != '{') {//Pop '{', if case have a choice '}'.
                     return false;
                 } break;
             }
         }


     }
     // To check the stack is empty or not
     if (st.isEmpty()) {
         console.log("expression  is balanced");

     }
     else {
         console.log("Not balanced");
         }
     }
     catch (err) {
         console.log(err);
     }
 }balanced();
