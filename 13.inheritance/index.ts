class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet() {
        return `Hello, this is ${this.firstName} ${this.lastName}, inheriting from Person.`;
    }

    getAge() {
        return this.age;
    }
}

class Users extends Person {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName ,age);
    }
}

class Admin extends Person {

    role:string;

    constructor(firstName:string , lastName:string , age:number ,role:string){
        super(firstName,lastName,age)
        this.role = role;
    }

    greet(): string {
        return `hi ${this.firstName} ${this.lastName} form ${this.role}`
    }
}

const user11 = new Users("Tylor","durden",29)
const user22  = new Admin("The","Narrator",25,"Admin")

console.log(user11.getAge())
console.log(user22.getAge())

console.log(user11.greet())
console.log(user22.greet())