interface User {
    firstName : string,
    lastName : string,
    middleName?:string,
    age?:number
}

const greetUser = (user : User) =>{
    console.log(`hellow ${user.firstName + user.lastName}`)
}

const userData = (user : User) =>{
    console.log(`${user}`)
}

const userFullName = (user :User) =>{
    console.log(`${user.firstName+ user.middleName  +  user.lastName}`)
}

const user = {
    firstName : "lana",
    lastName : "rey",
    age : 40
}

const user2 = {
    firstName : "lana",
    lastName : "rey",
    age : 40,
    middleName :"del"

}

greetUser(user);
userData(user);
userFullName(user2);