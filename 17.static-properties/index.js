var Users = /** @class */ (function () {
    function Users(name) {
        Users.userCousnt++;
        this.name = name;
    }
    Users.prototype.getName = function () {
        return "this is ".concat(this.name);
    };
    Users.getUserCount = function () {
        return Users.userCousnt;
    };
    Users.userCousnt = 0;
    return Users;
}());
var user1 = new Users("Dhanush");
var user2 = new Users("Walter");
var user3 = new Users("Jessi");
console.log(user1);
console.log(user3);
console.log(user2);
console.log(Users.getUserCount());
