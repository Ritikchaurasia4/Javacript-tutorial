// ................ Left Rotation of an array by 1 ..................

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[0];

// for(i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];       // left rotate/shift the elements of the array
// }

// arr[arr.length-1] = copy; 
// console.log(arr); 



// ------------------ Right Rotation of an array by 1 -----------------

let arr = [1, 2, 3, 4, 5];

let copy = arr[arr.length-1]; // copy the last element of the array

for(let i=arr.length-1;i>0;i--){
    arr[i] = arr[i-1]; // right rotate/shift the elements of the array
}

arr[0] = copy; // copy the first element of the array
console.log(arr); 

