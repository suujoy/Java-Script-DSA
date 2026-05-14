let s = "MCMXCV";

let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
let sum = 0;

for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]];
    let next = roman[s[i + 1]];
    if (current < next) {
        console.log(-current);
        sum -= current;
    } else {
        console.log(current);
        sum += current;
    }
}

console.log(sum);

// Intiger to Roman

let num = 1994;

let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
];

let answer = "";

for (let i = 0; i < values.length; i++) {
    let currentValue = values[i];
    while (num >= currentValue) {
        answer += symbols[i];

        num-=currentValue
    }
    
}

console.log(answer);



// 20 Valid Parentheses

let b = '()[]{}';

let stack = []

for(let i = 0;i<b.length;i++){
    let current = b[i]

    
}
