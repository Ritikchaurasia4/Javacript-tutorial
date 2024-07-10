// class with constructor 

// We can create an object from the class by the syntax  let var = new classname();
// when we create an object from the class then the new keyword find a constructor in the classes 
// but if there is no constructor in the classes then by default javascript will create a constructor in the class automatically.

class toyotaCar{
    
    constructor(brand,mileage){
        this.brand = brand;
        this.milage = mileage;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }


}

// Create an object
let fortuner = new toyotaCar("Fortuner",10);
console.log(fortuner);

let swift = new toyotaCar("Swift",15);
console.log(swift);
