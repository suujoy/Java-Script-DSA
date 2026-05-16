let nums = [2, 7, 11, 15];

let target = 9;

let map = new Map();

for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
        map.set(nums[i], i);
    } else console.log(i, map.get(target - nums[i]));
}


let arr = [[10, 20], [30, 40]];
arr[0][1] = arr[1][0];
console.log(arr[0][1]);
