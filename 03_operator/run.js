console.log("Level - Basic Array Questions Set 2");

// Question - 1
const scoreList = [45, 67, 89, 23, 56];
// Find the sum of all elements.

let sum = 0;
for (let i = 0; i <= scoreList.length - 1; i++) {
    sum += scoreList[i];
}
console.log(sum);

// Question - 2
const priceList = [100, 200, 300, 400];
// Create a new array with all values doubled.
let doublePrice = [];

for (let i = 0; i <= priceList.length - 1; i++) {
    doublePrice.push(priceList[i] * 2);
}

console.log(doublePrice);

// Question - 3
const ageList = [12, 17, 18, 21, 15];
// Create a new array with ages greater than 18.

let age18plus = [];

for (let i = 0; i <= ageList.length - 1; i++) {
    if (ageList[i] > 18) age18plus.push(ageList[i]);
}

console.log(age18plus);

// Question - 4
const nameList = ["Amit", "Rahul", "Sita", "Gita"];
// Convert all names to uppercase.

let uppercaseList = [];

for (let i = 0; i <= nameList.length - 1; i++) {
    uppercaseList.push(nameList[i].toUpperCase());
}

console.log(uppercaseList);

// Question - 5
const evenOddList = [1, 2, 3, 4, 5, 6];
// Create a new array with only even numbers.

let evenLish = [];

for (let i = 0; i <= evenOddList.length - 1; i++) {
    if (evenOddList[i] % 2 === 0) evenLish.push(evenOddList[i]);
}
console.log(evenLish);

// Question - 6
const stringList = ["hello", "world", "js"];
// Create a new array with lengths of each string.

let stringLength = [];
for (let i = 0; i <= stringList.length - 1; i++) {
    let string = stringList[i];
    stringLength.push(string.length);
}

console.log(stringLength);

// Question - 7
const findList = [5, 10, 15, 20];
// Find the first element greater than 10.

for (let i = 0; i <= findList.length - 1; i++) {
    if (findList[i] > 10) {
        console.log(findList[i]);
        break;
    }
}

// Question - 8
const indexList = [9, 8, 7, 6];
// Find index of element 7.
for (let i = 0; i <= indexList.length - 1; i++) {
    if (indexList[i] === 7) console.log(i);
}

indexList.forEach((elem, indes) => {
    if (elem === 7) console.log(indes);
});

// Question - 9
const mixedList = [1, 2, 3, 4];
// Check if all elements are greater than 0.

let counter = 0;

for (let i = 0; i <= mixedList.length - 1; i++) {
    if (mixedList[i] > 0) counter++;
}

console.log(
    mixedList.length === counter
        ? "all elem are greater than 0"
        : "at least one elem is less than 0",
);

// Question - 10
const someList = [1, 3, 5, 8];
// Check if at least one element is even.

let flag = false;

for (let i = 0; i <= someList.length - 1; i++) {
    if (someList[i] % 2 === 0) {
        flag = true;
    }
}

console.log(flag ? "at least one elem is even" : "none of them are even");
