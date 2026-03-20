console.log("Question - 1");
// Print all elements one by one
let fruits = [2, 4, 6, 8];

for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i]);
}

console.log("Question - 2");
// Find sum of all elements
let nums = [5, 10, 15];
let sum = 0;
for (let i = 0; i <= nums.length - 1; i++) {
    sum += nums[i];
}
console.log(sum);

console.log("Question - 3");
// Find largest number
let arr = [3, 7, 1, 9];
let largest = arr[0]
for (let i = 0; i <= arr.length - 1; i++) {
    if (largest < arr[i]) largest = arr[i];
}

console.log(largest);

console.log("Question - 4");
// Count total elements
let data = [11, 22, 33];
let count = 0;
for (let i = 0; i <= data.length - 1; i++) {
    count++
}
console.log(count)


console.log("Question - 5");
// Check if 6 exists
let box = [2, 4, 6, 8];
let check = false
for(let i = 0;i<=box.length-1;i++){
    if(6===box[i]) check=true
}

console.log(check?'Yes 6 is exist ' : ' Not exist');