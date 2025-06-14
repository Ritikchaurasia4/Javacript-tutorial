// ------------------ Remove Duplicates using filter methods ---------------------

// let arr = [1,2,2,4,3,3,5,5,5,5,5,5,7,2];

// let duplicates = arr.filter((curElem, index) =>{
//     return arr.indexOf(curElem) == index;
// })

// console.log(duplicates)

// ------------ Duplicates using Logic---------------------

// let array = [1,2,2,4,3,3,5,5,5,5,5,5,7,2];

// let duplicates = [];

// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i] == array[j] & !duplicates.includes(array[i])){
//             duplicates.push(array[i]);
//         }
//     }
// }
// console.log(duplicates)

// ---------------------------- Remove Duplicates ---------------------

let arr = [1,1,2,2,4,5,6,6,7,7];

let unique_Array = [];

for(let i=0;i<arr.length;i++){
    if(!unique_Array.includes(arr[i])){
        unique_Array.push(arr[i]);
    }
}

console.log(unique_Array);