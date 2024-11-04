"use strict";

let diceNumber = parseInt(prompt("Please enter the number of dice"))
let targetEyeSum = parseInt(prompt("Please enter the target sum of the eye numbers"))
let ROLL_TIMES = 10000;
let successTimes = 0;

for (let i = 0; i < 10000; i++) {
    let eyeSum = 0;

    for (let j = 0; j < diceNumber; j++) {
        eyeSum += Math.floor(Math.random() * 6 + 1);
    }

    if (eyeSum === targetEyeSum) {
        successTimes++;
    }
}

let probability = successTimes / ROLL_TIMES * 100;
let result = `Probability to get sum ${targetEyeSum} with ${diceNumber} dice is ${probability.toFixed(2)}%.`;

document.querySelector("#target").innerHTML = result;

