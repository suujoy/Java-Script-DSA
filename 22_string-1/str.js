const str = "sujus";
let isPalinodrome = true;

let i = 0;
let j = str.length - 1;

while (i < j) {
    if (str[i] !== str[j]) isPalinodrome = false;
    i++;
    j--;
}

console.log(isPalinodrome);

//Toggle each alphabate of string AsDFwe -> aSdfWE

let prompt = require("prompt-sync")();
let s = prompt("Enter Your fucking String :- ");

let ans = "";

for (let i = 0; i <= s.length - 1; i++) {
    let ascii = s.charCodeAt(i);
    if(ascii>=65&& ascii<=97){
        ans += String.fromCharCode(ascii+32);
    }else ans+=String.fromCharCode(ascii-32)
}

console.log(ans);
