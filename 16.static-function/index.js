// static function is used to access a function with refeing a object ot the class
var Product = /** @class */ (function () {
    function Product(productName, description) {
        this.productName = productName;
        this.Description = description;
    }
    Product.sayHellow = function (name) {
        console.log("this is hi for ".concat(name));
    };
    return Product;
}());
Product.sayHellow("dhanush");
