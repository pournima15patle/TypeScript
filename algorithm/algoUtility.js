"use strict";
var AlgoUtil = /** @class */ (function () {
    function AlgoUtil() {
    }
    AlgoUtil.prototype.primeNumber = function () {
        for (var i = 0; i <= 1000; i++) { // create variable count and assign value 0 to it
            var count = 0;
            for (var j = 0; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                console.log(i);
            }
        }
    };
    /******************************BubbleSort  for String*********************************/
    /*
    *@purpose : generate the bubble sort array  for given array
    *@param   : res-array
    *@description: take array,arrange elements according size using bubble sort,and return the result
    **/
    AlgoUtil.prototype.bubbleSort = function (arr1, size) {
        // compare first and next elements in array and arrange 
        for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
                if (arr1[i] > arr1[j]) {
                    //Swap if one element is greter than another element
                    var temp = arr1[i];
                    arr1[i] = arr1[j];
                    arr1[j] = temp;
                }
            }
        }
        return arr1;
    };
    /*******************************Merge Sort******************************/
    /*
     *@purpose : sort the array using the merge sort technique
     *@param   : res-array
     *@description : take array,divide into two halves,and sort the elements for both right and left halves
     */
    AlgoUtil.prototype.mergeSort = function (arr) {
        var n = arr.length;
        //if size is equals to 1 return it.
        if (n === 1) {
            // return once we hit an array with a single item
            return arr;
        }
        //cal mid value 
        var mid = Math.floor(n / 2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid);
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    };
    AlgoUtil.prototype.merge = function (left, right) {
        var result = [];
        var i = 0;
        var j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            }
            else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    };
    return AlgoUtil;
}());
module.exports = AlgoUtil;
