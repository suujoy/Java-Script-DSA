console.log("Question - 1");
// Print Fibonacci series up to n terms
let a = 0;
let b = 1;
let n = 7;
console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

console.log("Question - 2");
// Count number of even and odd digits
let num = 12341
let length = num.toString().length
let countOdd=0
let countEven = 0
for (let i = 1;i<=length;i++){
    let digits = num%10
    if (digits%2===0) countEven++
    else countOdd++
    num = Math.floor(num/10)
}

console.log(countEven)
console.log(countOdd)

console.log("Question - 3");
// Print numbers using while loop from 1 to n
let n2 = 9
let i = 1
while(i<=n2){
    console.log(i)
    i++
}

console.log("Question - 4");
// Skip numbers divisible by 3 using continue
let num3 = 69

for (let i =1;i<=num3;i++){
    if(i%3===0)continue
    console.log(i);
}

console.log("Question - 5");
// Find power using loop (without Math.pow)

let num4 = 5
let exponent = 4
let pow = 1
for (let i = 1 ; i <=exponent ;i++){
    pow*=num4
}

console.log(pow)

