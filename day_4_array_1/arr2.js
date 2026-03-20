console.log("Question - 1");
// Print only even numbers
let men = [1, 2, 3, 4, 5];
for (let i = 0;i<=men.length-1;i++){
    if(men[i]%2===0)console.log(men[i]);
}


console.log("Question - 2");
// Create new array with doubled values
let list = [10, 20, 30];
let newList  = []
for (let i=0;i<=list.length-1;i++){
    newList.push(list[i]*2)
}
console.log(newList);

console.log("Question - 3");
// Count numbers greater than 20
let bag = [5, 15, 25, 35];
let countGreter20=0
for(let i  = 0;i<=bag.length-1;i++){
    if(bag[i]>20) countGreter20++
}
console.log(countGreter20);

console.log("Question - 4");
// Multiply all elements
let set = [2, 3, 4];
let multiplyValue = 1
for(let i = 0;i<=set.length-1;i++){
    multiplyValue*=set[i]
}
console.log(multiplyValue);

console.log("Question - 5");
// Reverse the array
let items = [7, 14, 21];
let rev = []

for(let i=0;i<=items.length-1;i++){
    rev.unshift(items[i])
}

console.log(rev);
