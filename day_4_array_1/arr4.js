console.log("Question - 1");
// Check all numbers are even
let even = [2, 4, 6, 8];
let isEven = false;
for (let i = 0; i <= even.length - 1; i++) {
    if (even[i] % 2 === 0) {
        isEven = true;
        break;
    }
}

console.log(isEven ? "All Nums are Even Num" : "No All Nums are not even nums");

console.log("Question - 2");
// Check any number is even
let odd = [1, 3, 5, 8];
let isEvenCheck = false;

for (let i = 0; i <= odd.length - 1; i++) {
    if (odd[i] % 2 !== 0) {
        isEvenCheck = false;
        break;
    }
}
console.log(
    isEvenCheck ? "All Nums are Even Num" : "No All Nums are not even nums",
);

console.log("Question - 3");
// Get users age greater than 18
let users = [
    { name: "A", age: 18 },
    { name: "B", age: 22 },
    { name: "C", age: 17 },
];
let ageGreater18 = [];
for (let i = 0; i <= users.length - 1; i++) {
    if (users[i].age > 18) ageGreater18.push(users[i]);
}
console.log(ageGreater18);

console.log("Question - 4");
// Sort array in ascending order
let sort = [5, 3, 8, 1];

for (let i = 0; i <= sort.length - 1; i++) {
    for (let j = 0; j < sort.length-1; j++) {
        if (sort[j] > sort[j + 1]) {
            let temp = sort[j];
            sort[j] = sort[j + 1];
            sort[j + 1] = temp;
        }
    }
}
console.log(sort);

console.log("Question - 5");
// Multiply each element with index
let mul = [1, 2, 3];
let mult = mul.map((val,index)=>val*index)
console.log(mult);