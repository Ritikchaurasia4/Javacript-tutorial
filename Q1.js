//  create a class user with two properties name and eamail. It has a method called viewdata that allows user to views websites.

// let data = "Secret Information";
// class User{
//     constructor(name,email){
//         this.name = name ;
//         this.email = email;
//         console.log(name);
//         console.log(email);
//     }
//     viewData(){
//         console.log("Data",data);
//     }
// }
// let obj1 = new User("Ritik", "riti@gmail.com");
// let obj2 = new User("Rahul" ,"rahul@gmail.com");



let data = "Secret Information";
class User{
    constructor(name,email){
        this.name = name ;
        this.email = email;
         console.log(name);
        // console.log(email);
    }
    viewData(){
        console.log("Data",data);
    }
}

class admin extends User{
    constructor(name,email){
        super(name,email);  // its call parent constructor
    }

    editData(){
        data = "Some new value";
    }
}
let obj1 = new User("Ritik", "riti@gmail.com");
// let obj2 = new User("Rahul" ,"rahul@gmail.com");
