var greetUser = function (user) {
    console.log("hellow ".concat(user.firstName + user.lastName));
};
var userData = function (user) {
    console.log("".concat(user));
};
var userFullName = function (user) {
    console.log("".concat(user.firstName + user.middleName + user.lastName));
};
var user = {
    firstName: "lana",
    lastName: "rey",
    age: 40
};
var user2 = {
    firstName: "lana",
    lastName: "rey",
    age: 40,
    middleName: "del"
};
greetUser(user);
userData(user);
userFullName(user2);
