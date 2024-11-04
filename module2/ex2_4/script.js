"use strict";

const numbers = [];
let userInput = Number(prompt("Enter a number(enter 0 to quit)"));

while (userInput !== 0) {
    numbers.push(userInput);
    userInput = Number(prompt("Enter a number(enter 0 to quit)"));
}

console.log(numbers.sort().reverse());

