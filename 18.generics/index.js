var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        return this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
var stringStack = new Stack();
// it show erorr
// console.log(numberStack.push("hi"));
// console.log(numberStack.push("hellow"));
// console.log(numberStack.push("me"));
// console.log(stringStack.push(2));
// console.log(stringStack.push(3));
// console.log(stringStack.push(4));
console.log(stringStack.push("hi"));
console.log(stringStack.push("hellow"));
console.log(stringStack.push("me"));
console.log(numberStack.push(2));
console.log(numberStack.push(3));
console.log(numberStack.push(4));
console.log(stringStack.items);
console.log(numberStack.items);
