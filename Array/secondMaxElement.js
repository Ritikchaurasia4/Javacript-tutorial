let arr = [1, 100, 3, 330, 5, 67, 230];

let max = Math.max(arr[0], arr[1]); // Assume the first element is the largest
let sMax = Math.min(arr[0], arr[1]); // Assume the second element is the largest, here only for two element


for(let i=2;i<arr.length;i++){
   if(arr[i] > max){
        sMax = max; // Update second largest to the previous largest
        max = arr[i]; // Update largest to the current element
    } else if(arr[i] > sMax && arr[i] < max){
        sMax = arr[i]; // Update second largest to the current element
    }
}
console.log(sMax); // Output the second largest element

