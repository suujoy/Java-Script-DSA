// Level: Easy String Questions

console.log("Question - 01");
let fruits = "hello";
// Reverse the string

let revStr = "";

for (let i = fruits.length - 1; i >= 0; i--) {
    revStr += fruits.charAt(i);
}
console.log(revStr);

console.log("Question - 02");
let animals = "madam";
// Check if palindrome
let i = 0;
let j = animals.length - 1;
let isPalindrome = true;

while (i <= j) {
    if (animals[i] != animals[j]) {
        isPalindrome = false;
        break;
    }
    i++;
    j--;
}

console.log(isPalindrome ? "Palindrome" : "not Palindrome");

console.log("Question - 03");
let colors = "javascript";
// Count vowels
let vCount = 0;

for (let i = 0; i <= colors.length - 1; i++) {
    if ("aeiouAEIOU".includes(colors[i])) vCount++;
}
console.log(vCount);

console.log("Question - 04");
let cities = "kolkata";
// Count consonants
let cCount = 0;

for (let i = 0; i <= cities.length - 1; i++) {
    if (!"aeiouAEIOU".includes(cities[i])) cCount++;
}

console.log(cCount);

console.log("Question - 05");
let drinks = "apple";
// Convert to uppercase
let drinksUpper = "";
for (let i = 0; i <= drinks.length - 1; i++) {
    drinksUpper += drinks.charAt(i).toUpperCase();
}
console.log(drinksUpper);

console.log("Question - 06");
let games = "FOOTBALL";
// Convert to lowercase
let gamesLower = "";

for (let i = 0; i <= games.length - 1; i++) {
    gamesLower += games.charAt(i).toLowerCase();
}
console.log(gamesLower);

console.log("Question - 07");
let books = "i love coding";
// Count words
let bookArr = books.split(" ");

let wordCount = 0;

for (let i = 0; i <= bookArr.length - 1; i++) {
    wordCount++;
}
console.log(wordCount);

console.log("Question - 08");
let movies = "hello world";
// Find first non-repeating character
let firstNonRepeatChar = "";

let movieArr = new Array(128).fill(0);

for (let i = 0; i <= movies.length - 1; i++) {
    let ascii = movies.charCodeAt(i);

    movieArr[ascii] += 1;
}

for (let i = 0; i <= movies.length - 1; i++) {
    let ascii = movies.charCodeAt(i);

    if (movieArr[ascii] === 1) {
        firstNonRepeatChar = movies[i];
        break;
    }
}

console.log(firstNonRepeatChar);

console.log("Question - 09");
let flowers = "aaaaaasa";
// Check if all characters are same
let isAllSame = true;

let char = flowers[0];
for (let i = 0; i <= flowers.length - 1; i++) {
    if (char !== flowers[i]) {
        isAllSame = false;
    }
}

console.log(isAllSame ? "All Char are same" : "All Char are not same");

let flowerArr = new Array(128).fill(0);
let uniqueCount = 0;

for (let i = 0; i <= flowers.length - 1; i++) {
    let ascii = flowers.charCodeAt(i);
    flowerArr[ascii] += 1;
}
for (let i = 0; i < flowerArr.length; i++) {
    if (flowerArr[i] > 0) {
        uniqueCount++;
    }
}
console.log(uniqueCount === 1 ? "All char are  same" : "All char are not same");

console.log("Question - 10");
let gadgets = "abcde";
// Print each character with index
for (let i = 0; i < gadgets.length; i++) {
    console.log(`${gadgets[i]} is at ${i} index`);
}

console.log("Question - 11");
let snacks = "banana";
// Count frequency of each character
let snacksArr = new Array(128).fill(0);

for (let i = 0; i <= snacks.length - 1; i++) {
    let ascii = snacks.charCodeAt(i);

    snacksArr[ascii] += 1;
}

for (let i = 0; i <= snacksArr.length - 1; i++) {
    if (snacksArr[i] > 0) {
        console.log(
            `${String.fromCharCode(i)} is present on the fucking string is ${snacksArr[i]} times`,
        );
    }
}

console.log("Question - 12");
let vehicles = "programming";
// Remove duplicate characters
let dupRemoveStr = "";
let vehiclesArr = new Array(26).fill(0);

for (let i = 0; i <= vehicles.length - 1; i++) {
    let ascii = vehicles.charCodeAt(i);

    vehiclesArr[ascii - 97] += 1;
}
for (let i = 0; i <= vehicles.length - 1; i++) {
    let ascii = vehicles.charCodeAt(i);

    if (vehiclesArr[ascii - 97] > 0) {
        dupRemoveStr += vehicles[i];
        vehiclesArr[ascii - 97] = 0;
    }
}

console.log(dupRemoveStr);

console.log("Question - 13");
let clothes = "hello";
// Replace 'l' with 'x'
let repStr = "";

for (let i = 0; i <= clothes.length - 1; i++) {
    if (clothes.charAt(i) === "l") {
        repStr += "x";
    } else repStr += clothes[i];
}
console.log(repStr);

console.log("Question - 14");
let tools = "abcdef";
// Check if string contains 'd'
for (let i = 0; i <= tools.length - 1; i++) {
    if (tools[i] === "d") {
        console.log("String contains 'd'");
        break;
    }
}

console.log("Question - 15");
let juices = "apple";
// Find last character
console.log(juices[juices.length - 1]);

console.log("Question - 16");
let shapes = "racecsar";
// Check palindrome using two pointers
let original = shapes;
let rev = "";

for (let i = shapes.length - 1; i >= 0; i--) {
    rev += shapes[i];
}
console.log(original === rev ? "Palindrome" : "not Palindrome");

console.log("Question - 17");
let devices = "frontend";
// Find length without using .length
let length = 0;
for (let i = 0; i <= devices.length - 1; i++) {
    length++;
}
console.log(length);

console.log("Question - 18");
let classes = "abc";
// Print all substrings
for (let i = 0; i <= classes.length - 1; i++) {
    for (let j = i; j <= classes.length - 1; j++) {
        console.log(classes.slice(i, j + 1));
    }
}

console.log("Question - 19");
let songs = "aabb";
// Remove consecutive duplicates
let removeDup = songs[0];
for (let i = 1; i <= songs.length - 1; i++) {
    if (songs[i] !== songs[i - 1]) removeDup += songs[i];
}

console.log(removeDup);

console.log("Question - 20");
let papers = "hello world";
// Capitalize first letter

let paperArr = papers.split(" ");
let capPaper = "";

for (let i = 0; i <= paperArr.length - 1; i++) {
    let first = paperArr[i][0].toUpperCase();
    let rest = paperArr[i].slice(1, paperArr[i].length);
    capPaper+=(first+rest+' ')
}
console.log(capPaper);
