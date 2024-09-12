var concateString = function (a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
};
console.log(concateString("a", "b", "c"));
console.log(concateString("a", "b"));
