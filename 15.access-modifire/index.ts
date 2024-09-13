class Person {

    private name:string;
    private age:number;
    private role : string;

    constructor(name:string,age:number,role:string){
        this.name = name;
        this.age = age;
        this.role = role;
    }

    // we use privete method in name age and role so ue getter and setter to access it

    getName(){
        return this.name;
    }

    getAge(){
        return this.age
    }

    setName(name:string){
        return this.name = name
    }


}

const user = new Person("dhanush",21,"dev")

// this one show error if the name property is privete
// user.name= "tom"
user.setName("tom")

console.log(user.getName())