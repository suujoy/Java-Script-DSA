const arr = [23, 34, 45, 64, 75, 32, 11, 93, 13];
let target = 64;
let index = -1;

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
        index = i
        break;
    }
}

console.log(index === -1 ? "Not Found" : `Found at index ${index}`);
