var jsonVal = '{"name":"dhanush","email":"dhanush@type.com","age":"sdf"}';
var users = JSON.parse(jsonVal);
// it show error because password is not in interface
// console.log(`users data: ${users.name} ${users.email} ${users.age} ${users.password}`)
console.log("users data: ".concat(users.name, " ").concat(users.email, " ").concat(users.age, " "));
