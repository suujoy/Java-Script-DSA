console.log("Question - 1");
// Remove duplicate values
let dup = [1, 2, 2, 3, 4, 4];
let unique = [];

for (let i = 0; i <= dup.length - 1; i++) {
    let exists = false;

    for (let j = 0; j <= unique.length - 1; j++) {
        if (dup[i] === unique[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) unique.push(dup[i]);
}
console.log(unique);

console.log("Question - 2");
// Find second largest number
let big = [10, 20, 30, 40];
let largest = big[0];
let secLarg = big[1];
for (let i = 0; i <= big.length - 1; i++) {
    for (let j = 0; j <= big.length - 1; j++) {
        if (largest < big[j]) {
            let temp = largest;
            largest = big[j];
            secLarg = temp;
        }
    }
}
console.log(secLarg);

console.log("Question - 3");
// Split array into two halves
let cut = [1, 2, 3, 4, 5];
let firstHalf = [];
let secHalf = [];

for (let i = 0; i <= cut.length - 1; i++) {
    if (i < cut.length / 2) {
        firstHalf.push(cut[i]);
    } else secHalf.push(cut[i]);
}

console.log(`First Half =  ${firstHalf}`);

console.log(`Second Half =  ${secHalf}`);

console.log("Question - 4");
// Find index of 15 without using indexOf
let find = [5, 10, 15, 20];
let indexOf15 = 0;

for (let i = 0; i <= find.length - 1; i++) {
    if (15 === find[i]) indexOf15 = i;
}
console.log(indexOf15);

console.log("Question - 5");
// Flatten the array
let flat = [
    [1, 2],
    [3, 4],
];

let flatArr = [];

for (let i = 0; i <= flat.length - 1; i++) {
    for (let j = 0; j <= flat[i].length - 1; j++) {
        flatArr.push(flat[i][j]);
    }
}


console.log(flatArr);