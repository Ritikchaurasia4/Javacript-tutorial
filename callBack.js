// ............ callBack ............

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,3,sum);
// setTimeout(calculator,2000);


// function calculator(a,b){
//     console.log(a-b);
// }
// calculator(1,3,sum);
// setTimeout(calculator,2000);