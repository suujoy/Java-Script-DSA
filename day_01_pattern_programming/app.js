const prompt = require("prompt-sync")();

/**
 * Right Angle Triangle
 */
const num = Number(prompt("Enter a Number"));

for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * Inverted Right Angle Triangle
 */
const num2 = Number(prompt("Enter Your Second Number"));

// 1.
for (let i = 1; i <= num2; i++) {
    for (let j = 1; j <= num2 - (i - 1); j++) {
        process.stdout.write("* ");
    }
    console.log();
}

//2.

for (let i = 1; i <= num2; i++) {
    for (let j = num2; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * Mirror Right Angle Triangle
 */

const num3 = Number(prompt("Enter 3rd Number"));

for (let i = 1; i <= num3; i++) {
    for (let j = 1; j <= num3 - (i - 1); j++) {
        process.stdout.write("  ");
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * Inverted Mirror Right Triangle.
 */

const num4 = Number(prompt("Enter 4th Number"));

for (let i = 1; i <= num4; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("  ");
    }

    for (let k = 1; k <= num4 - (i - 1); k++) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * Inverted Pyramid Pattern
 */

const num5 = Number(prompt("Enter 5th Number"));

for (let i = 1; i <= num5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= num5 - (i - 1); k++) {
        process.stdout.write("* ");
    }
    console.log();
}

/**
 * Pyramid Pattern
 */

const num6 = Number(prompt("Enter 6th Number"));

for (let i = 1; i < +num6; i++) {
    for (let j = 1; j <= num6 - (i - 1); j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <=i ; k++) {
        process.stdout.write(' *');
    }
    console.log();
}
