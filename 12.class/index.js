var Users = /** @class */ (function () {
    function Users(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Users.prototype.greet = function () {
        return "hellow ".concat(this.firstName, " ").concat(this.lastName);
    };
    Users.prototype.getAge = function () {
        return this.age;
    };
    return Users;
}());
var user1 = new Users("brad", "pitt", 23);
var user23 = new Users("sd", "pitt", 20);
console.log(user1);
console.log(user1.getAge());
console.log(user23.greet());
