console.log("Level - Basic String DSA Questions");
console.log();

console.log("Question - 01");
console.log("Create a string and print its total length.");
console.log();

let text = "JavaScript";

console.log(text.length);

console.log("Question - 02");
console.log("Print the first and last character of a string.");
console.log();

let word = "Developer";

console.log(`1st Char = ${word[0]} & Last Char = ${word[word.length - 1]}`);

console.log("Question - 03");
console.log("Count total vowels in a string.");
console.log();

let sentence = "I am learning JavaScript";

let vowelCount = 0;

for (let i = 0; i <= sentence.length - 1; i++) {
    if ("aeiouAEIOU".includes(sentence[i])) vowelCount++;
}

console.log(`Total vowel in this word is ${vowelCount}`);

console.log("Question - 04");
console.log("Check if a string is palindrome or not.");
console.log();

let name = "amadama";
let revName = "";

for (let i = name.length - 1; i >= 0; i--) {
    revName += name[i];
}

console.log(name === revName ? "Palindrome" : "Not Palindrome");

let i = 0;
let j = name.length - 1;
let isPalindrome = true;

while (i < j) {
    if (name[i] !== name[j]) isPalindrome = false;
    i++;
    j--;
}

console.log(isPalindrome ? "Palindrome" : "Not Palindrome");

console.log("Question - 05");
console.log("Reverse a string.");
console.log();

let language = "Coding";

let revStr = "";

for (let i = language.length - 1; i >= 0; i--) {
    revStr += language[i];
}

console.log(revStr);

console.log("Question - 06");
console.log("Convert all characters into uppercase.");
console.log();

let message = "hello world";
let upperMessage = "";

for (let i = 0; i < message.length; i++) {
    upperMessage += message[i].toUpperCase();
}
console.log(upperMessage);

console.log("Question - 07");
console.log("Count total words in a sentence.");
console.log();

let line = "JavaScript is very interesting";
console.log(line.length);




console.log("Question - 08");
console.log("Count how many times a character appears in a string.");
console.log();

let data = "banana";
let target = "a";
let targetCount = 0

for(let i = 0;i<data.length;i++){
    if(data[i]===target)targetCount++
}

console.log(`Totat ${target} Count is ${targetCount}`);

console.log("Question - 09");
console.log("Check if a word exists inside another string.");
console.log();

let paragraph = "I love web development";
let searchWord = "web";
let wordArr = paragraph.split(' ')

for(let i = 0;i<= wordArr.length-1;i++){
    if(searchWord===wordArr[i]) console.log(`${searchWord} is Exist in this ${i} index `);
}

console.log();
console.log("Question - 10");
// Print all characters one by one from a string.
console.log();

let value = "Frontend";

for (let i = 0;i<=value.length-1;i++){
    console.log(value[i]);
}

// Hints

// Q1 - Use .length

// Q2 - Use indexing

// Q3 - Use loop and condition

// Q4 - Compare original and reversed string

// Q5 - Use loop or split reverse join

// Q6 - Use toUpperCase()

// Q7 - Use split(' ')

// Q8 - Use loop and counter

// Q9 - Use includes()

// Q10 - Use for loop
