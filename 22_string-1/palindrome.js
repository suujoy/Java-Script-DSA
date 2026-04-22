let text = "sasswas";
let isPalinome = false;

for (let i = 0; i <= text.length - 1; i++) {
    for (let j = text.length - 1; j >= 0; j--) {
        if (text[i] === text[j]) {
            isPalinome = true;
        }
    }
}


console.log(isPalinome?'Palinodrome':'not palinodrome');