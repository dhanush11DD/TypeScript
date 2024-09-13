var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, this is ".concat(this.firstName, " ").concat(this.lastName, ", inheriting from Person.");
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return Users;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "hi ".concat(this.firstName, " ").concat(this.lastName, " form ").concat(this.role);
    };
    return Admin;
}(Person));
var user11 = new Users("Tylor", "durden", 29);
var user22 = new Admin("The", "Narrator", 25, "Admin");
console.log(user11.getAge());
console.log(user22.getAge());
console.log(user11.greet());
console.log(user22.greet());
