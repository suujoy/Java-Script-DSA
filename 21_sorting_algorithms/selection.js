const arr = [3, 6, 2, 6, 90, 34, 78, 45, 78, 94, 71, 38];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) min = j;
    }

    if (min != i) {
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);
