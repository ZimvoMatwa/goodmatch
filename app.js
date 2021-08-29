// var firstC;
// var secondC;

// const readline = require("readline");
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

// r1.question("What is your name? ", function (answer) {
//     // console.log(`Oh, so your name is ${answer}`);
//     firstC = answer;
//     r1.close();
//     return firstC;
// });
// r1.question("Please enter 2nd player's name: ", function(answer){
//     secondC = answer;
//     r1.close();
//     return secondC;
    
// })

const prompt = require("prompt-sync")();
const playerOne = prompt("Player1, please enter your first name: ").toLowerCase();
const playerTwo = prompt("Player2, please enter your first name: ").toLowerCase();
const cleanNames = playerOne+playerTwo;
const rawMatchArray = [];
const mush = (cleanNames).split("");
var x = 0;

while(mush.length > x){
    rawMatchArray.push((cleanNames).split(mush[x]).length - 1);
    cleanNames.replace("z", "");
    console.log(`${cleanNames[x]}`)
    x++;
}

//function to add numbers on opposite sides

console.log(`${playerOne} and ${playerTwo} have a ${rawMatchArray} match.`);
console.log(cleanNames);