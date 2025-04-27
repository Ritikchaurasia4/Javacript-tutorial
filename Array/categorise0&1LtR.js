
     //    i   
let arr = [1, 1, 0, 1, 0, 1, 0, 1];
     //    j
     

let i = 0, j = 0; // i is the first index of the array, j is also the first index of the array

while(i < arr.length){
    if(arr[i] == 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr); // [0, 0, 0, 4, 5, 3, 2, 1]