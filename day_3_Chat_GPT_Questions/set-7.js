console.log("Question - 1");
// Check Armstrong number
let num = 153;
let power = 0;
let sum = 0;
let original = num;
let numPower = num;

while (numPower > 0) {
    power++;
    numPower = Math.floor(numPower / 10);
}

while (num > 0) {
    let digits = num % 10;
    sum += digits ** power;
    num = Math.floor(num / 10);
}

if (sum === original) console.log("Armstrong");
else console.log("Not Armstrong");

console.log("Question - 2");
// Print sum of factorial of digits
let num1 = 123;
let sum1 = 0;

while (num1 > 0) {
    let fact = 1;
    let digits = num1 % 10;
    for (let i = 1; i <= digits; i++) {
        fact *= i;
    }
    sum1 += fact;
    num1 = Math.floor(num1 / 10);
}
console.log(sum1);

console.log("Question - 3");
// Find strong number
let num2 = 145;
let sum2 = 0;
let original2 = num2;

while (num2 > 0) {
    let fact = 1;
    let digits = num2 % 10;
    for (let i = 1; i <= digits; i++) {
        fact *= i;
    }
    sum2 += fact;
    num2 = Math.floor(num2 / 10);
}

if (sum2 === original2) console.log("Strong");
else console.log("Not Strong");

console.log("Question - 4");
// Print numbers with exactly 3 divisors

let num11 = 69;

for (let i = 1; i <= num11; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
    }
    if (count === 3) console.log(i);
}

console.log("Question - 5");
// Print pattern:
// *
// * *
// * * *

let num12 = 3;

for (let i = 1; i <= num12; i++) {
    for(let j = 1;j<=i;j++){
        process.stdout.write(' *')
    }
    console.log()
}
