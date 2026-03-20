console.log("Question - 1");
// Check number is prime or not

let num = 30;
let count = 0;

if (num === 1) console.log("Not Prime");
else if (num === 2) console.log("Prime");
else {
    for (let i = 3; i <= num / 2; i++) {
        if (num % i === 0) {
            count++;
            break;
        }
    }

    if (count === 0) console.log("Prime");
    else console.log("Not Prime");
}

console.log("Question - 2");
// Find HCF of two numbers
let num1 = 12;
num2 = 18;
let hcf = 0;

for (let i = 1; i < num1 && num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        if (hcf < i) hcf = i;
    }
}
console.log(hcf);

let factorNum2 = 0;
let factorNum1 = 0;
let hcf2 = 0;

for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) factorNum1 = i;
}

for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) factorNum2 = i;
}

for (let i = 1; i <= factorNum1 && factorNum2; i++) {
    if (factorNum1 % i === 0 && factorNum2 % i === 0) {
        if (hcf2 < i) hcf2 = i;
    }
}
console.log(hcf2);

console.log("Question - 3");
// Find LCM of two numbers
let num3 = 12;
let num4 = 18;
let lcm = num3 + num4;

for (let i = 1; i <= num3 && num4; i++) {
    if (num3 % i === 0 && num4 % i === 0) {
        if (lcm > i) lcm = i;
    }
}
console.log(lcm);

console.log("Question - 4");
// Print reverse table from 10 to 1
let table = 0;

for (let i = 10; i >= 0; i--) {
    table = i;
    for (let j = 1; j <= 10; j++) {
        console.log(`${table} X ${j} = ${table * j}`);
    }
}

console.log("Question - 5");
// Count frequency of a digit in number
let num10 = 1223356535436532514365;
let count2 = 0;
let digit = 3;
let length = num10.toString().length;

for (let i = 1; i <= length; i++) {
    let digi = num10 % 10;
    if (digi === digit) count2++;
    num10 = Math.floor(num10 / 10);
}


console.log(count2)