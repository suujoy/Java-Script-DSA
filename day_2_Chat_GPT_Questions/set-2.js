console.log("Question - 1");
// Check number is positive, negative, or zero
let num = 3;

if (num === 0) console.log("Zero");
else if (num >0) console.log("Positive");
else console.log("Negative");

console.log("Question - 2");
// Print numbers from 10 to 1 using loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Question - 3");
// Find cube of a number using Math.pow
let num1 = 4;
let cubeNum = Math.pow(num1, 3);
console.log(cubeNum);

console.log("Question - 4");
// Use switch to print day name (1-7)
let num2 = 3;

switch (num2) {
    case 1:
        {
            console.log("Sunday");
        }
        break;
    case 2:
        {
            console.log("Monday");
        }
        break;
    case 3:
        {
            console.log("Tuesday");
        }
        break;
    case 4:
        {
            console.log("Wednusday");
        }
        break;
    case 5:
        {
            console.log("Thusday");
        }
        break;
    case 6:
        {
            console.log("Friday");
        }
        break;
    case 7:
        {
            console.log("Saterday");
        }
        break;
    default:
        console.log("Invalid Num2");
}

console.log("Question - 5");
// Print all even numbers from 1 to 20

for (let i = 1 ; i<=20;i++){
    if(i%2===0) console.log(i)
}
