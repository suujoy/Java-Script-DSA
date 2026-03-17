console.log("Question - 1");
// Find largest of two numbers
let num1 = 3,
    num2 = 4;
console.log(
    num1 > num2
        ? `${num1} is Largest then ${num2}`
        : `${num2} is largest then ${num1}`,
);

console.log("Question - 2");
// Print multiplication table of 5
let multiplication = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplication} X ${i} = ${multiplication * i} `);
}

console.log("Question - 3");
// Count digits of a number
let num3 = 123456;
let count = 0;
for (let i = 1; i <= num3.toString().length; i++) {
    count++;
}
console.log(count);

let count1 = 0;
while (num3 > 0) {
    count1++;
    num3 = Math.floor(num3 / 10);
}
console.log(count1);

console.log("Question - 4");
// Reverse a number using loop
let num4 = 123456;
let rev = "";

while (num4 > 0) {
    let digits = num4 % 10;
    rev += digits;
    num4 = Math.floor(num4 / 10);
}

console.log(rev);

console.log("Question - 5");
// Check number divisible by 3 and 5

let num5 = 15;

console.log(
    num5 % 5 === 0 && num5 % 3 === 0
        ? `${num5} is divisible by 3 and 5`
        : `${num5} is not divisible by 3 and 5`,
);
