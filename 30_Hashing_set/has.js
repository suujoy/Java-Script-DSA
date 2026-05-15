// Level: Basic JavaScript Map Questions

console.log("Question - 1");

// Hint:
// Create a new Map
// Store name and age

// Create a map with two key value pairs

let students = new Map();

students.set("Sujoy", 21);
students.set("Laxmi", 21);
students.set("Surmila", 18);
students.set("Sanju", 18);
students.set("Sagar", 20);
console.log(students);

console.log("Question - 2");

// Hint:
// Use set()
// Add city = Kolkata

// Add one new value into map

let data = new Map();

data.set("City", "Kolkata.");
console.log(data);

console.log("Question - 3");

// Hint:
// Use get()
// Access value using key

// Print value of 'name'

let user = new Map([
    ["name", "Sujoy"],
    ["age", 21],
]);

console.log(user.get("name"));

console.log("Question - 4");

// Hint:
// Use has()
// Check if key exists

// Check 'email' key exists or not

let info = new Map([
    ["name", "Rahul"],
    ["city", "Delhi"],
]);

console.log(info.has("email"));

console.log("Question - 5");

// Hint:
// Use delete()
// Remove one key

// Delete 'age' key

let student = new Map([
    ["name", "Anik"],
    ["age", 20],
]);
console.log(student);
student.delete("name");
console.log(student);

console.log("Question - 6");

// Hint:
// Use size

// Print total keys inside map

let fruits = new Map([
    ["apple", 50],
    ["mango", 80],
    ["banana", 30],
]);

console.log(fruits.size);

console.log("Question - 7");

// Hint:
// Use clear()

// Remove all map data

let cart = new Map([
    ["shirt", 2],
    ["pant", 1],
]);
console.log(cart);
cart.clear();
console.log(cart);

console.log("Question - 8");

// Hint:
// Use for...of
// Print key and value

// Loop through complete map

let course = new Map([
    ["HTML", 1],
    ["CSS", 2],
    ["JS", 3],
]);

for (let key of course) {
    console.log(`${key[0]} => ${key[1]}`);
}

console.log("Question - 9");

// Hint:
// Update existing value
// Use set()

// Change price of apple to 100

let items = new Map([
    ["apple", 50],
    ["mango", 80],
]);

items.set("apple", 100);
console.log(items);

console.log("Question - 10");

// Hint:
// Store boolean values in map

// Create map with isLogin and isAdmin

let admin = new Map();

admin.set("isAdmin", false);

console.log(admin);

let arr = [1, 2, 3, 4, 1, 3, 2, 3, 5, 6, 2, 3, 6, 1, 2, 5, 2];

let map = new Map();

for (let i = 0; i < arr.length; i++) {
    // if (map.has(arr[i])) {
    //     map.set(arr[i], map.get(arr[i]) + 1);
    // } else {
    //     map.set(arr[i], 1);
    // }

    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map);
