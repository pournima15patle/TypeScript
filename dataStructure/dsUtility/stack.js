"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    Stack.prototype.stack = function (capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    };
    Stack.prototype.push = function (ele) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;
    };
    Stack.prototype.pop = function () {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    };
    Stack.prototype.peek = function () {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    };
    Stack.prototype.getsize = function () {
        return this.size;
    };
    Stack.prototype.isEmpty = function () {
        if (this.top == -1) {
            console.log("Stack is empty");
            return this.top;
        }
        console.log("Stack is not empty");
    };
    Stack.prototype.dispaly = function () {
        var string = "";
        for (var i = 0; i <= this.top; i++) {
            string = string + this.stk[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    };
    Stack.prototype.reverseStack = function (stk) {
        var newstack = new Stack;
        var n = this.getsize();
        for (var index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;
    };
    return Stack;
}());
module.exports = Stack;
