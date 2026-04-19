const arr = [45, 12, 78, 3, 56, 23, 89, 1, 67, 34];

const n = arr.length;

for (let i = 1; i < n; i++) {
    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}

console.log(arr);