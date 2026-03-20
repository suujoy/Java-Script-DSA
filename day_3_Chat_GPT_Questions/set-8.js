console.log("Question - 1");
// Print inverted triangle pattern
let num=3

for (let i =1 ;i<=num ;i++){
    for (let j=1;j<=num-(i-1);j++){
        process.stdout.write(' *')
    }
    console.log();
}

console.log("Question - 2");
// Print pyramid pattern

for (let i = 1 ; i<=num;i++){
    for (let k = 1 ;k<=num-(i-1);k++){
        process.stdout.write(' ')
    }
    for(let j=1;j<=i;j++){
        process.stdout.write(' *')
    }
    console.log();
}


console.log("Question - 3");
// Print number pattern:
// 1
// 12
// 123

for (let i = 1 ; i <=num;i++){
    for(let j = 1 ; j<=i;j++){
    process.stdout.write(j.toString())        
    }
    console.log();
}


console.log("Question - 4");
// Print reverse pyramid
for (let i=1;i<=num;i++){
    for (let k=1;k<=i;k++){
        process.stdout.write(' ')
    }
    for (let j=1;j<=num-(i-1);j++){
        process.stdout.write(' *')
    }
    console.log();
}



console.log("Question - 5");
// Print hollow square pattern

let num1 = 8


for (let i = 1;i<=num1;i++){
    for (let j= 1;j<=num1;j++){
        if(i===1||i===num1)process.stdout.write('*  ')
            else if(j===1||j===num1)process.stdout.write('*  ')
        else process.stdout.write('   ')
    }
    console.log();
}