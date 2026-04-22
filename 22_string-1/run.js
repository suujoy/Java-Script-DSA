// =====================
// STRING QUESTIONS (BASIC LEVEL)
// =====================

// Question 1
console.log("Question 1");
/*
Reverse a string.
*/
let reverseText = "hello world";
let rev = "";

for (let i = reverseText.length - 1; i >= 0; i--) {
    rev += reverseText[i];
}

console.log(rev);

// Question 2
console.log("Question 2");
/*
Count total vowels in a string.
*/
let vowelText = "javascript";
let vowelCount = 0;
for (let i = 0; i <= vowelText.length - 1; i++) {
    vowelCount++;
}
console.log(vowelCount);

// Question 3
console.log("Question 3");
/*
Check if string is palindrome.
*/
let palindromeText = "madam";
let text = "";
let arr = palindromeText.split("");

for (let i = arr.length - 1; i >= 0; i--) {
    text += arr[i];
}
console.log(palindromeText === text ? "palinodrome" : "not palinodrome");

// Question 4
console.log("Question 4");
/*
Capitalize first letter of each word.
*/
let capitalizeText = "hello world from js";
const arr2 = capitalizeText.split(" ");
let text2 = [];
let capital = "";

for (let i = 0; i <= arr2.length - 1; i++) {
    text2 += arr2[i][0].toUpperCase() + arr2[i].slice(1) + " ";
}

console.log(text2.trim());

// Question 5
console.log("Question 5");
/*
Find longest word in string.
*/
let longestWordText = "i love programming very much";
let longArr = longestWordText.split(" ");
let longWord = "";
let ccc = 0;

for (let i = 0; i <= longArr.length - 1; i++) {
    let longCount = 0;
    let word = longArr[i];
    longCount = word.length;
    if (longCount > ccc) {
        ccc = longCount;
        longWord = word;
    }
}

console.log(longWord);

// Question 6
console.log("Question 6");
/*
Remove all spaces from string.
*/
let noSpaceText = "remove all spaces";
const nspace = noSpaceText.split(" ");
console.log(nspace.join(""));

// Question 7
console.log("Question 7");
/*
Count occurrences of a character.
*/
let charCountText = "bananaa";
let targetCharacter = "a";
let targetCount = 0;

for (let i = 0; i <= charCountText.length - 1; i++) {
    if (charCountText[i] === targetCharacter) targetCount++;
}
console.log(`Total ${targetCount} times 'a' appear in the word`);

// Question 8
console.log("Question 8");
/*
Check if two strings are anagrams.
*/
let anagramFirst = "listens";
let anagramSecond = "silent";
let firstShort = anagramFirst.split("").sort().join("");
let secShort = anagramSecond.split("").sort().join("");

console.log(firstShort === secShort ? "Anagrams" : "Not Anagrams");

// Question 9
console.log("Question 9");
/*
Replace all vowels with '*'.
*/
let replaceVowelText = "hello javascript";
let withoutVowel=''


  withoutVowel=  replaceVowelText.replace(/[aeiou]/gi,'*')

console.log(withoutVowel);

// Question 10
console.log("Question 10");
/*
Find duplicate characters in string.
*/
let duplicateCharText = "programming";

// =====================
// HINTS
// =====================
/*
1. Use split(), reverse(), join().
2. Loop and check vowels using includes().
3. Compare original and reversed string.
4. Use split(" ") and map().
5. Use split and compare word lengths.
6. Use replaceAll() or split/join.
7. Loop and count matching characters.
8. Sort both strings and compare.
9. Use regex /[aeiou]/g with replace().
10. Use object or Set for tracking.
*/
