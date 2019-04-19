var req = require('util');
class Deck {
    deck2D() {
        //suit array for taking suits
        var suit: string[]
        suit = ["♣️", "♦️", "❤️", "♠️"];
        //rank array for taking rank of cards
        var rank: string[]
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
        var deck = new Array();
        try {
            //calculate total cards 
            var n: number = suit.length * rank.length;
            for (let i: number = 0; i < suit.length; i++) {
                for (let j: number = 0; j < rank.length; j++) {
                    var temp: string = "";
                    /*push the all cards in deck array */
                    deck.push(temp + rank[j] + " " + suit[i]);
                }
            }

            for (let i = 0; i < n; i++) {
                var random = Math.floor(Math.random() * deck.length)
                /* for suffling the cards */
                var temp: string = deck[i];
                deck[i] = deck[random];
                deck[random] = temp;
            }

            var arr = [[], [], [], []];
            var x = 0, y = 9
            /**assign 9 card for one person */
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 9; j++) {
                    arr[i][j] = deck[j + x];
                }
                x = x + 9;

            }
            console.log(arr);
            for (var i: number = 0; i < 4; i++) {
                // arr[i] = [];
                console.log("player " + i + " cards : ");
                for (var j: number = 0; j < 9; j++) {

                    req.print(arr[i][j] + " ")

                } console.log("\n");
            }

        } catch (err) {
            console.log(err);

        }
    }
} export =Deck