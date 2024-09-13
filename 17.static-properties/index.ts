class Users {

    name:string;
    static userCousnt:number = 0;

    constructor(name:string){
        Users.userCousnt++;
        this.name = name;
    }

    getName(){
        return `this is ${this.name}`
    }

    static getUserCount (){
        return Users.userCousnt;
    }

}


const user1 = new Users("Dhanush")
const user2 = new Users("Walter")
const user3 = new Users("Jessi")

console.log(user1)
console.log(user3)
console.log(user2)
console.log(Users.getUserCount())