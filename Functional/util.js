"use strict";
var Util = /** @class */ (function () {
    function Util() {
    }
    /**************************************************************************************************
       * @Purpose   : By ensuring username with minimum 3 characters,replacing USERNAME with userinput
       *              and print the string.
       * @descriptipn :Declaring the function and passing the userinput as argument.
       * @function: Displayname takes the userinput and print it with some sentence.
       *
       ************************************************************************************************/
    Util.prototype.replaceString = function (str1, str2, userName) {
        if (userName.length >= 3) {
            var resultedString = str1.replace(str2, userName);
        }
        console.log(resultedString);
    };
    
    Util.prototype.checkLeapYear = function (year1) {
        //console.log(year1);
        if (((year1 % 4 == 0) && (year1 % 100 != 0)) ||
            (year1 % 400 == 0)) {
            console.log(year1 + ' is leap year ');
        }
        else {
            console.log(year1 + ' is not leap year');
        }
    };
    /**********************************Gambler******************************************/
    /*GAMBLER*/
    /*
    * @purpose : To calculate the total number of wins and percentage of wins and loss
    * @param   : stack- amount that player have
    * @param   : goal - amount that player want to win
    * @param   : totaltime -no of times he wants to play
    * @description : the game continue upto, if player reached his goal,
    *               or he lost all his money or he lost his total number of times he want play.
    */
    Util.prototype.gambler = function (stack, goal, totalTime) {
        var win = 0;
        var noOfTime = 0;
        //loop upto win and lost his all stack and upto total number of times he wants play 
        while (stack != 0 && goal != stack && noOfTime < totalTime) {
            // genearate the random number to check weather he wins or lost
            var ran = Math.round(Math.random());
            if (ran == 1) {
                stack++;
                win++;
            }
            else {
                stack--;
            }
            noOfTime++;
        }
        // calculating the total percentage 
        var winPer = (win / totalTime) * 100;
        var loosPer = 100 - winPer;
        console.log("Number of wins " + win);
        console.log("wining percentage " + winPer);
        console.log("lossing percentage " + loosPer);
    };
    return Util;
}());
module.exports = Util;
