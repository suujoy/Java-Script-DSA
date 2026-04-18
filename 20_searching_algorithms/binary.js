const arr = [1, 3, 23, 25, 35, 46, 56, 67, 68, 78, 89, 90];

const target = 1;

let start = 0;
let end = arr.length - 1;
let index = -1;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        index = mid;
        break;
    } else if (arr[mid] < target) {
        start = mid + 1;
    } else if (arr[mid] > target) {
        end = mid - 1;
    }
}


console.log(index===-1?'not fouund':`Found at index: ${index}`);