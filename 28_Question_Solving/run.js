let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        if (i === j || i + j === mat.length - 1) sum += mat[i][j];
    }
}

console.log(sum);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
];

let newMatrix = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (!newMatrix[j]) {
            newMatrix[j] = [];
        }
        newMatrix[j][i] = matrix[i][j];
    }
}

console.log(newMatrix);

let mtx = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

let row = [];
let col = [];

for (let i = 0; i < mtx.length; i++) {
    for (let j = 0; j < mtx[i].length; j++) {
        if (mtx[i][j] === 0) {
            row.push(i);
            col.push(j);
        }
    }
}

for (let k = 0; k < row.length; k++) {
    for (let j = 0; j < mtx[0].length; j++) {
        mtx[row[k]][j] = 0;
    }
}
for (let k = 0; k < col.length; k++) {
    for (let i = 0; i < mtx.length; i++) {
        mtx[i][col[k]] = 0;
    }
}

console.log("mtx");
console.log(mtx);

console.log("rev");
let rev = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Transpose Array
let newRev = [];

for (let i = 0; i < rev.length; i++) {
    for (let j = 0; j < rev[i].length; j++) {
        if (!newRev[j]) newRev[j] = [];
        newRev[j][i] = rev[i][j];
    }
}

// Reverse array

for (let i = 0; i < newRev.length; i++) {
    let arr = newRev[i];
    let j = 0;
    let k = arr.length-1;

    while (j < k) {
        let temp = arr[j]
        arr[j] = arr[k]
        arr[k] = temp;

        j++;
        k--;
    }
}

console.log(newRev);
