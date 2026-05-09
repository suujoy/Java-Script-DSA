console.log();
console.log("Question - 01");
// Find the second largest number from the array.

let dax = [12, 45, 7, 89, 34, 89, 23];

let firstLargest = dax[0];
let secondLargest = dax[0];

for (let i = 0; i < dax.length; i++) {
    if (firstLargest < dax[i]) {
        secondLargest = firstLargest;
        firstLargest = dax[i];
    }
}

console.log(`The second largest among this ${dax} is ${secondLargest}`);

console.log();
console.log("Question - 02");
// Remove all duplicate values from the array.

let vix = [1, 2, 3, 2, 4, 5, 1, 6, 4];

let vixArr = [];

for (let i = 0; i < vix.length; i++) {
    let isUnique = true;
    for (let j = 0; j < vixArr.length; j++) {
        if (vix[i] === vixArr[j]) isUnique = false;
    }
    isUnique ? vixArr.push(vix[i]) : "";
}

console.log(`The unique arr is - ${vixArr} from ${vix}`);

console.log();
console.log("Question - 03");
// Rotate the array one step to the right.

let zup = [10, 20, 30, 40, 50];
let lastElem = zup[zup.length - 1];

for (let i = zup.length - 1; i >= 0; i--) {
    let temp = zup[i];
    zup[i] = zup[i + 1];
    zup[i + 1] = temp;
}

zup[0] = lastElem;
console.log(zup);

console.log();
console.log("Question - 04");
// Count total even and odd numbers from the array.

let kex = [11, 24, 37, 40, 53, 66, 71];

let eventCount = 0;
let oddCount = 0;

for (let i = 0; i < kex.length; i++) {
    if (kex[i] % 2 === 0) eventCount++;
    else oddCount++;
}

console.log(`Total Event = ${eventCount} \nTotal Odd = ${oddCount}`);

console.log();
console.log("Question - 05");
// Find the missing number from 1 to 10.

let yot = [1, 2, 3, 4, 5, 6, 8, 9, 10];
let expectedSum = 0;
let actualSum = 0;

for (let i = 0; i <= 10; i++) {
    expectedSum += i;
}
for (let i = 0; i < yot.length; i++) {
    actualSum += yot[i];
}

console.log(`The missing number is ${expectedSum - actualSum}`);

console.log();
console.log("Question - 06");
// Reverse the array without using reverse().

let lum = [5, 10, 15, 20, 25];

let i = 0;
let j = lum.length - 1;
let ccc = 0;

while (i < j) {
    let temp = lum[i];
    lum[i] = lum[j];
    lum[j] = temp;
    ccc++;

    i++;
    j--;
}

console.log(lum);

console.log();
console.log("Question - 07");
// Find all pairs whose sum is equal to target.

let ner = [2, 4, 6, 8, 10, 12];
let pax = 14;
let pair = [];

for (let i = 0; i < ner.length; i++) {
    let target = pax - ner[i];
    for (let j = i + 1; j < ner.length; j++) {
        if (ner[j] === target) {
            pair.push([ner[i], ner[j]]);
        }
    }
}

console.log(pair);

console.log();
console.log("Question - 08");
// Move all zero values to the end of array.

let wix = [0, 5, 0, 3, 8, 0, 1];
// let nonZero = [];
// let zeroCount = 0;

// for (let i = 0; i < wix.length; i++) {
//     if (wix[i] !== 0) {
//         nonZero.push(wix[i]);
//     } else zeroCount++;
// }

// for (let i = 0; i < zeroCount; i++) {
//     nonZero.push(0);
// }
// console.log(nonZero);

//ldsn

let nZero = [];

for (let i = 0; i < wix.length; i++) {
    for (let j = wix.length - 1; j >= 0; j--) {
        if(wix[i]!==0){
            let temp = wix[i]
            wix[i]=wix[j]
            wix[j]=temp
        }
    }
}

console.log(wix);

console.log();
console.log("Question - 09");
// Find the longest word from the array.

let tov = ["apple", "banana", "watermelon", "grapes", "mango"];

console.log();
console.log("Question - 10");
// Merge two arrays without duplicate values.

let rex = [1, 2, 3, 4];
let foz = [3, 4, 5, 6];

// Hint - 01
// Track largest and second largest values

// Hint - 02
// Check value before pushing

// Hint - 03
// Store last element and shift others

// Hint - 04
// Use modulus operator

// Hint - 05
// Compare expected and actual sum

// Hint - 06
// Swap values using loop

// Hint - 07
// Use nested loop

// Hint - 08
// Push non zero values first

// Hint - 09
// Compare string lengths

// Hint - 10
// Combine and filter duplicates
