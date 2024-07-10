// Class provides a templates for the creation of the objects
// class is a blueprint for the creation of the object

class ToyotaCar {
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(Brand){
        this.brandName = Brand;
    }
}

// We can create an object from the class by the syntax  let var = new classname();
// when we create an object from the class then the new keyword find a constructor in the classes 
// but if there is no constructor in the classes then by default javascript will create a constructor in the class automatically.

let fortuner = new ToyotaCar(); // object create
fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar();  // object create
lexus.setBrand("Lexus");