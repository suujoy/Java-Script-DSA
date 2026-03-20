console.log("Question - 1");
// Check perfect number

let num=6
let sum1 = 0

for (let i = 1 ; i<num;i++){
    if(num%i===0){
        sum1+=i
    }
}

if(sum1===num)console.log('is a perfect')
    else console.log('not perfect');

console.log("Question - 2");
// Print all prime numbers from 1 to n
let primeCheck = 100;

for (let i = 1; i <= primeCheck; i++) {
    let isPrime = true;
    if (i === 1) isPrime = false;
    else if (i === 2) isPrime = true;
    else {
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(`${i} is a prime number`);
    }
}

console.log("Question - 3");
// Find sum of all prime numbers till n
let n = 69;
let sum = 0;

for (let i = 1; i <= n; i++) {
    let isPrime = true;

    if (i === 1) continue;

    for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        sum += i;
    }
}
console.log(sum);

console.log("Question - 4");
// Print alternate numbers using continue


console.log("Question - 5");
// Use do-while to print 1 to n
