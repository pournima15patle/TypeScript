"use strict";
var req = require('util');
var Deck = /** @class */ (function () {
    function Deck() {
    }
    Deck.prototype.deck2D = function () {
        //suit array for taking suits
        var suit;
        suit = ["♣️", "♦️", "❤️", "♠️"];
        //rank array for taking rank of cards
        var rank;
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = new Array();
        //calculate total cards 
        var n = suit.length * rank.length;
        for (var i_1 = 0; i_1 < suit.length; i_1++) {
            for (var j_1 = 0; j_1 < rank.length; j_1++) {
                var temp = "";
                /*push the all cards in deck array */
                deck.push(temp + rank[j_1] + " " + suit[i_1]);
            }
        }
        for (var i_2 = 0; i_2 < n; i_2++) {
            var random = Math.floor(Math.random() * deck.length);
            /* for suffling the cards */
            var temp = deck[i_2];
            deck[i_2] = deck[random];
            deck[random] = temp;
        }
        var arr = [[], [], [], []];
        var x = 0, y = 9;
        /**assign 9 card for one person */
        for (var i_3 = 0; i_3 < 4; i_3++) {
            for (var j_2 = 0; j_2 < 9; j_2++) {
                arr[i_3][j_2] = deck[j_2 + x];
            }
            x = x + 9;
        }
        console.log(arr);
        for (var i = 0; i < 4; i++) {
            // arr[i] = [];
            console.log("player " + i + " cards : ");
            for (var j = 0; j < 9; j++) {
                req.print(arr[i][j] + " ");
                // console.log(arr[i][j + " "]);
            }
            console.log("\n");
        }
    };
    return Deck;
}());
module.exports = Deck;
