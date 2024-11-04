"use strict";

const numbers = [];

let numberInputted = parseInt(prompt("Enter a number"));
numbers.push(numberInputted);

while (true) {
    numberInputted = parseInt(prompt("Enter a number"));

    if (numbers.includes(numberInputted)) {
        numbers.sort(function(a, b){return a-b});
        alert(`The number ${numberInputted} already exists!`);
        break;
    } else {
        numbers.push(numberInputted);
    }
}

console.log(numbers);