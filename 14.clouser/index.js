function createCounter() {
    var counterValue = 0;
    return ({
        increment: function () {
            counterValue++;
        },
        showCount: function () {
            return counterValue;
        },
        decrement: function () {
            counterValue--;
        }
    });
}
var counter1 = createCounter();
var counter2 = createCounter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.showCount());
console.log(counter2.showCount());
