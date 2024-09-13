var Person = /** @class */ (function () {
    function Person(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    // we use privete method in name age and role so ue getter and setter to access it
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setName = function (name) {
        return this.name = name;
    };
    return Person;
}());
var user = new Person("dhanush", 21, "dev");
// this one show error if the name property is privete
// user.name= "tom"
user.setName("tom");
console.log(user.getName());
