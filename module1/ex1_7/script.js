"use restrict";

let diceNumber = parseInt(prompt("Enter the number of dice you want to roll"));
let throwTimes = parseInt(prompt("Enter the number of times you want to roll"))
let sumDice = 0;
let result = ""

for(let i = 0; i < throwTimes; i++) {
    for(let n = 0; n < diceNumber; n ++) {
        sumDice += Math.floor(Math.random() * 6 + 1);
    }
}

result = diceNumber + " dice rolled for " + throwTimes + " times. The sum is " + sumDice;
document.querySelector("#target").innerHTML = result;