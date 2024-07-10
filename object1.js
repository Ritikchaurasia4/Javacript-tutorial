// .................  Object ...........

// const Student = {
//     fullName : "Ritik Chaurasia",
//     marks : 90 ,
//     printName:function(){
//         console.log(marks);
//     },
// };


// We can make of its own prototype

const Employee = {
    calcTax : function(){
        console.log("Tax is 10 percent");
    },
};
const ritik = {
    Salary :100000 ,
};
const Rahul ={
    salary : 200000 ,
};

// create prototype

ritik . __proto__ = Employee;
Rahul . __proto__ = Employee;