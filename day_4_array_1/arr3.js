console.log("Question - 1");
// Use map to create squares
let val = [1, 2, 3, 4, 5];
let squares = val.map((item) => item * item);
console.log(squares);
let squares2 = [];
for (let i = 0; i <= val.length - 1; i++) {
    squares2.push(val[i] * val[i]);
}
console.log(squares2);

console.log("Question - 2");
// Use filter to get numbers greater than 15
let mix = [10, 15, 20, 25];
let numberGreter15 = mix.filter((item) => item > 15);

console.log(numberGreter15);

console.log("Question - 3");
// Use reduce to find sum
let add = [5, 10, 15];
let sum = add.reduce((acc, item) => acc + item, 0);
console.log(sum);

let sum2 = 0;
add.reduce((acc, item) => {
    sum2 += item
});
console.log(sum2);

console.log("Question - 4");
// Convert all names to uppercase
let names = ["ram", "shyam", "hari"];
for (let i = 0; i <= names.length - 1; i++) {
    console.log(names[i].toUpperCase());
}

console.log("Question - 5");
// Add 5 at end and remove first element
let seq = [1, 2, 3, 4];

let newArr = [];

for (let i = 1; i <= seq.length - 1; i++) {
    newArr.push(seq[i]);
}

newArr[newArr.length] = 5;
console.log(newArr);
