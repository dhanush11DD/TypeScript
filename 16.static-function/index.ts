// static function is used to access a function with refeing a object ot the class

class Product {

    productName : string;
    Description : string;

    constructor(productName : string , description:string){
        this.productName = productName;
        this.Description = description;
    }

    static sayHellow(name){
        console.log(`this is hi for ${name}`)
    }

}

Product.sayHellow("dhanush")