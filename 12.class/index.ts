class Users {

     firstName :string;
     lastName : string;
     age:number;

     constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
     }

     greet(){
        return `hellow ${this.firstName} ${this.lastName}`
     }

     getAge (){
        return this.age
     }

}

let user1 = new Users("brad","pitt",23);
let user23 = new Users("sd","pitt",20);

console.log(user1)
console.log(user1.getAge())
console.log(user23.greet())