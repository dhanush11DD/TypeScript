// encapsulation
function createCounter(){
    
    let counterValue = 0;

    return({
        increment : () =>{
            counterValue++;
        },
        showCount : () =>{
            return counterValue;
        },
        decrement : () =>{
            counterValue--;
        }
    })

}

const counter1 = createCounter()
const counter2 = createCounter()

counter1.increment()
counter1.increment()
counter1.increment()
counter1.increment()
counter2.increment()
counter2.increment()

console.log(counter1.showCount())
console.log(counter2.showCount())