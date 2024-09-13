interface Users {
    name:string,
    email:string,
    age:number
}

const jsonVal = '{"name":"dhanush","email":"dhanush@type.com","age":23}';

const users = JSON.parse(jsonVal) as Users

// it show error because password is not in interface
// console.log(`users data: ${users.name} ${users.email} ${users.age} ${users.password}`)

console.log(`users data: ${users.name} ${users.email} ${users.age} `)

