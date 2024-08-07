//  .............. Promise Chain ................

// function getdata(dataId){
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             resolve("success");
//         },3000);
//     });
// }
// getdata(1).then((res)=>{
//     return getdata(2);
// }).then((res)=>{
//     return getdata(3);
// }).then((res)=>{
//     return getdata(4);
// }).then((res)=>{
//     console.log(res);
// });






function getData(dataId){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            console.log("Data",dataId);
            resolve("success");
        },2000);
    });
}

// promise chain 

// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res) =>{
//         console.log(res);
//     });
// });

console.log("fetching data 1 ......");
getData(1).then((res) =>{
    console.log("Fetching data 2 .....");
    return getData(2);
}).then((res)=>{
    console.log("fetching data 3.....");
    return getData(3);
}).then((res)=>{
    console.log("fetching data 4 .....");
    return getData(4);
}).then((res)=>{
    console.log(res);
})


// promise chain is also difficult to understand hence we use   Async-Await