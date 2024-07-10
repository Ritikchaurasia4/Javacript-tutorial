// function getdata(){
//     console.log("Hello");
// }
// setTimeout(getdata ,2000);



// function getData(dataId){
//     setTimeout(()=>{
//         console.log("Data",dataId);
//     },2000);
// }
// getData(1);
// getData(2);

// The above code execute at a time but if we want to execute at diferent different then we use callBack hell.


function getData(dataId , getNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5,()=>{
                    console.log("terminated");
                });
            });
        });
    });
});
