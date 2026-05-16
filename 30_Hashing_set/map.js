// Level: Basic JavaScript Map Questions

console.log("Question - 1");

let students = ["Sujoy", "Rahul", "Sujoy", "Amit", "Rahul", "Riya"];

// Count frequency of each student using Map
let f = new Map();

for (let i = 0; i < students.length; i++) {
    f.set(students[i], (f.get(students[i]) || 0) + 1);
}

console.log(f);

console.log("Question - 2");

let numbers = [10, 20, 10, 30, 20, 40, 10];

// Find the most repeated number using Map
let most = new Map();

for (let i = 0; i < numbers.length; i++) {
    most.set(numbers[i], (most.get(numbers[i]) || 0) + 1);
}

let maxCount = 0;
let ansNum = 0;

for (let [key, value] of most) {
    if (value > maxCount) {
        maxCount = value;
        ansNum = key;
    }
}

console.log(
    `The most repeated number is : ${ansNum} \nand it appears : ${maxCount} times`,
);

console.log("Question - 3");

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Store fruit counts inside a Map

let fruitsCount = new Map();

for (let i = 0; i < fruits.length; i++) {
    fruitsCount.set(fruits[i], (fruitsCount.get(fruits[i]) || 0) + 1);
}

console.log(fruitsCount);

console.log("Question - 4");

let sentence = "javascript";

// Count frequency of every character using Map

let charF = new Map();

for (let i = 0; i < sentence.length; i++) {
    charF.set(sentence[i], (charF.get(sentence[i]) || 0) + 1);
}

console.log(charF);
console.log("Question - 5");

let nums = [1, 2, 3, 2, 4, 5, 1];

// Print only duplicate numbers using Map

let dupNum = new Map();

for (let i = 0; i < nums.length; i++) {
    if (dupNum.get(nums[i])) console.log(nums[i]);
    else dupNum.set(nums[i], 1);
}

console.log("Question - 6");

let words = ["cat", "dog", "cat", "bird", "dog", "cat"];

// Find which word appeared maximum times

console.log("Question - 7");

let marks = [
    ["Sujoy", 80],
    ["Rahul", 70],
    ["Amit", 90],
];

// Create a Map and print all students with marks

console.log("Question - 8");

let colors = ["red", "blue", "green", "blue", "red", "yellow"];

// Remove duplicates using Map

console.log("Question - 9");

let str = "aabbccddeeff";

// Count total unique characters using Map

console.log("Question - 10");

let products = [
    ["Laptop", 50000],
    ["Phone", 20000],
    ["Tablet", 15000],
];

// Find the total price of all products using Map


