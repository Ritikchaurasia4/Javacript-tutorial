// let arr = new Array(5)

// for(let i=0;i<arr.length;i++){
//     arr[i] = Number(window.prompt)("Enter a number: "));
// }

 
let arr = [1, 100, 3, 330, 5];

let max = arr[0]; // Assume the first element is the largest

for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max); // Output the largest element


// let arr = [1, 100, 3, 330, 5];

// let min = arr[0]; // Assume the first element is the lowest

// for(let i=1;i<arr.length;i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log(min); // Output the lowest element