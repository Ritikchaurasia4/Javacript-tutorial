// setTimeout() is a method that are used to execute the function . setTimeout() method always takes time in milisecond.

function Hello(){
    console.log("hello");
}
setTimeout(Hello,4000);   // in asynchronous not waiting for that messages

// or

// setTimeout(()=>{
//     console.log("Hello");
// },2000);

console.log("hii");
console.log("sir");

setTimeout(()=>{
    console.log("Hello");
},2000);