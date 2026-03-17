console.log("Question - 1");
// Find factorial of a number
let num = 5;
let facrorial = 1;
for (let i = 1; i <= num; i++) {
    facrorial *= i;
}
console.log(facrorial);

console.log("Question - 2");
// Print sum of digits of a number
let num1 = 12345;
let sum = 0;
let length = num1.toString().length;

for (let i = 1; i <= length; i++) {
    let digits = num1 % 10;
    sum += digits;
    num1 = Math.floor(num1 / 10);
}
console.log(sum);

console.log("Question - 3");
// Check number is palindrome
let num2 = 121;
let original = num2;
let rev = "";
let length1 = original.toString().length;
for (let i = 1; i <= length1; i++) {
    let digits = original % 10;
    rev += digits;
    original = Math.floor(original / 10);
}
console.log(rev);

console.log(rev == num2 ? "palindrome" : "not palindrome");

console.log("Question - 4");
// Print numbers divisible by 7 between 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
}

console.log("Question - 5");
// Use break to stop loop when number equals 5
let num3 =0
while (true){
    num3++
    if (num3===5) break
    console.log(num3)
}