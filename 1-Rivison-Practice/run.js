// Q1. Write a function that checks whether a given string is a palindrome.
// Ignore uppercase and lowercase differences.

const str = "Madam";

let i = 0,
    j = str.length - 1,
    isPalinodrome = true;

while (i < j) {
    if (str[i].toLocaleLowerCase() !== str[j].toLocaleLowerCase())
        isPalinodrome = false;

    i++;
    j--;
}

console.log(isPalinodrome ? "Palindrome" : "Not Palindrome");

// Q2. Write a function that counts the total number of vowels in a string.

const text = "JavaScript";

let vowelsCount = 0;
for (let i = 0; i < text.length - 1; i++) {
    if ("aeiouAEIOU".includes(text[i])) vowelsCount++;
}

console.log(`Total Vowel count in  ${text} is - ${vowelsCount}`);

// Q3. Find the largest number from the array without using Math.max().

const nums = [5, 9, 2, 18, 7];

let largest = 0;

for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > largest) largest = nums[i];
}

console.log(`The largest number in ${nums} is ${largest}`);

// Q4. Remove all duplicate values from the array.

const arr = [1, 2, 2, 3, 4, 4, 5];

let cleanArr = [];

for (let i = 0; i < arr.length; i++) {
    let val = arr[i],
        isFound = false;
    for (let j = 0; j < cleanArr.length; j++) {
        if (val === cleanArr[j]) {
            isFound = true;
            break;
        }
    }

    isFound ? "" : cleanArr.push(val);
}

console.log(cleanArr);

// Q5. Create a student object with name and marks.
// Print "Pass" if marks >= 40, otherwise print "Fail".

const stu = {
    name: "Sujoy",
    marks: 7,
};

console.log(stu.marks >= 40 ? "pass" : "Fail");

// Q6. Print numbers from 1 to 100.
// If divisible by 3 print "Fizz".
// If divisible by 5 print "Buzz".
// If divisible by both print "FizzBuzz".

for (let i = 0; i <= 100; i++) {
    console.log(
        i % 3 === 0
            ? "Fizz"
            : i % 5 === 0
              ? "Buzz"
              : i % 3 === 0 && i % 5 === 0
                ? "FizzBuzz"
                : i,
    );
}

/* Q7. Count how many even numbers and odd numbers
exist in the array. */
const list = [2, 5, 8, 7, 10, 13, 16];

let evenCount = 0,
    oddCount = 0;

for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] % 2 === 0) evenCount++;
    else oddCount++;
}

console.log(
    `Total Number of even in the list ${list} is ${evenCount} and Odd is ${oddCount}`,
);

// Q8. Calculate the total price of all products in the array.

const cart = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 500 },
];

let toatl = 0;

for (let key of cart) {
    toatl += key.price;
}

console.log(toatl);

// Q9. Return the grade based on the marks.
// 90-100 -> A
// 80-89  -> B
// 70-79  -> C
// 60-69  -> D
// Below 60 -> F

const mark = 86;

console.log(
    mark >= 90 && mark <= 100
        ? "A"
        : mark >= 80 && mark <= 89
          ? "B"
          : mark >= 70 && mark <= 79
            ? "C"
            : mark >= 60 && mark <= 69
              ? "D"
              : "F",
);

// Q10. Find the second largest number in the array.
// Bonus: Handle duplicate values.

const values = [10, 40, 30, 20, 50, 50];

let secLarge = values[0];
let firstLarge = values[0];

for (let i = 0; i <= values.length - 1; i++) {
    if (values[i] > firstLarge) {
        let temp = firstLarge;
        firstLarge = values[i];
        secLarge = temp;
    }
}

console.log(`The second largest number in the array ${values} is ${secLarge}`);
