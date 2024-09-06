// IIFE  :  Immediately Invoked Function Expression 

// IIfe is a function that is called immediately as soon as it is defined.

//   syntax  :     ( function(){..})();     Normal function 

//                 (()=>{ ....})();         Aero function

//                 (async ()=>{....})();    async function 


function getData(dataId){
    return new Promise((resolve , reject)=>{
        setTimeout((res)=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// IIFE

(async function getAllData(){
    console.log("fetching data 1 ....");
    await getData(1);
    console.log("fetching data 2....");
    await getData(2);
})();