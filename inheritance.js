// Inheritance 

// class Person{
//     constructor(){
//         this.species = "species is ho,o sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineers extends Person{
//     work(){
//         console.log("solve problems");
//     }
// }
// class doctor extends Person{
//     work(){
//         console.log("Treat Person");
//     }
// }
// // Create object

// let obj = new Engineers();


// use of super keyword 

// super keyword is used to call the constructor of its parent class ans also for access the properties and the method of the parent class

// We can not directly access the properties and method of the parent class but with the help of the super keyword we can access them.

class Person{
    constructor(){
        console.log("enter the parent constructor");
        this.species = "species is homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineers extends Person{

    constructor(branch){
        console.log("Enter the child constructor ");
        super();
        this.branch = branch;
        console.log("Exit");
    }
    work(){
        console.log("solve problems");
    }
}
class doctor extends Person{
    work(){
        console.log("Treat Person");
    }
//     constructor(){
//     console.log("exitttttttttttt");
// }
}
// Create object

let obj = new Engineers();
let objj = new doctor();