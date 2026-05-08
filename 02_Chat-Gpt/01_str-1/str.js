console.log();
console.log("Question - 31");
// Group anagrams together.
console.log();

let words = ["eat", "tea", "tan", "ate", "nat", "bat"];

let groupObj = {};

for (let i = 0; i <= words.length - 1; i++) {
    let word = words[i];

    let wordArr = new Array(128).fill(0);

    let arr = [];

    for (let i = 0; i < word.length; i++) {
        let ascii = word.charCodeAt(i);
        wordArr[ascii] += 1;
    }

    let key = wordArr.join("#");

    if (groupObj[key]) {
        groupObj[key].push(word);
    } else groupObj[key] = [word];
}

console.log(Object.values(groupObj));

console.log();
console.log("Question - 32");
// Find the longest palindrome substring.
console.log();

let text = "babad";

let longest = "";
for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j <= text.length; j++) {
        let isPalindrome = true;
        let word = text.slice(i, j);

        let k = 0;
        let l = word.length - 1;

        while (k < l) {
            if (word[k] !== word[l]) isPalindrome = false;

            k++;
            l--;
        }

        if (isPalindrome && word.length > longest.length) longest = word;
    }
}
console.log(longest);

console.log();
console.log("Question - 33");
// Check if one string is subsequence of another.
console.log();

let firstWord = "abc";
let secondWord = "ahbgdc";

let i = 0;
let j = 0;

while (j < secondWord.length) {
    if (firstWord[i] === secondWord[j]) i++;

    j++;
}

if (i === firstWord.length) {
    console.log("Subsequence");
} else {
    console.log("Not Subsequence");
}

console.log();
console.log("Question - 34");
// Find the minimum character to remove for palindrome.
console.log();

let value = "abcda";

console.log();
console.log("Question - 35");
// Convert Roman number into integer.
console.log();

let roman = "MCMIV";

let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

let total = 0;

for (let i = 0; i < roman.length; i++) {
    let currentRomanValue = romanObj[roman[i]];
    let nextRomanValue = romanObj[roman[i + 1]];

    if (currentRomanValue < nextRomanValue) total -= currentRomanValue;
    else total += currentRomanValue;
}

console.log(total);

console.log();
console.log("Question - 36");
// Find all substrings of a string.
console.log();

let data = "abc";

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j <= data.length; j++) {
        console.log(data.slice(i, j));
    }
}

console.log();
console.log("Question - 37");
// Find the longest common prefix from array.
console.log();

let arr = ["flower", "flow", "flight"];
let ref = arr[0];
let prefix = "";
let isMatch = true;

for (let i = 0; i < ref.length; i++) {
    let char = ref[i];

    for (let j = 1; j < arr.length; j++) {
        if (arr[j][i] !== char) {
            isMatch = false;
            break;
        }
    }
    isMatch ? (prefix += char) : "";
}
console.log(prefix);

console.log();
console.log("Question - 38");
// Count frequency of every character.
console.log();

let sentence = "javascript";
let sentenceArr = new Array(128).fill(0);

for (let i = 0; i < sentence.length; i++) {
    let ascii = sentence.charCodeAt(i);

    sentenceArr[ascii] += 1;
}

for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] === 0) continue;
    else console.log(`${String.fromCharCode(i)} - ${sentenceArr[i]}`);
}

console.log();
console.log("Question - 39");
// Check if brackets are balanced or not.
console.log();

let brackets = "{[()]}";

console.log();
console.log("Question - 40");
// Find the longest word without repeating characters.
console.log();

let language = "pwwkew";

// Hints

// Q31 - Use sorted word as key

// Q32 - Expand from center

// Q33 - Use two pointers

// Q34 - Compare palindrome possibilities

// Q35 - Use object mapping

// Q36 - Use nested loop

// Q37 - Compare characters index wise

// Q38 - Use object counter

// Q39 - Use stack

// Q40 - Use sliding window
