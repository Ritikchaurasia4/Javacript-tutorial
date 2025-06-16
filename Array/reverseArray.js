// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);  // Create a new array of the same length as arr (with extra space), its not a good practice 

// let j = 0;
// for(let i=arr.length-1;i>=0;i--){
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp); // [50, 40, 30, 20, 10]


// let arr = [10, 20, 30, 40, 50];

// let i = 0, j = arr.length-1; // j is the last index of the array

// while(i != j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);


// let arr = [1,2,3,4,5,6,7]

// let i = 0, j = arr.length-1;

// while(i != j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
//  console.log(arr);


let arr = [ 1,2,3,4,5,6,78]
let temp = new Array(arr.length);

let i = 0;

for(let j=arr.length-1;j>=0;j--){
    temp[i] = arr[j];
    i++;
}

console.log(temp);