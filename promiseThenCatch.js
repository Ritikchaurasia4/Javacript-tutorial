// function getpromise(){

// }

// const getPromise = ()=>{
//     return new romise((resolve , reject)=>{
//         console.log("I am a Promise");
//         resolve("success");
//     });
// };
// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled");
// });


function asynchFunction(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("some data 1..");
            resolve("success");
        },2000);
    });
}
console.log("fetching data 1....");
let p1 = asynchFunction();
p1.then((res)=>{
    console.log(res);
});