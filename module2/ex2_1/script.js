"use strict";

const numbers = [];
const reversedNumbers = [];

for (let i = 1; i <= 5; i++) {
    let inputNumber = Number(prompt(`Please enter number ${i}`));
    numbers.push(inputNumber);
}

for (let index = numbers.length - 1; index >= 0; index--) {
    reversedNumbers.push(numbers[index]);
}

console.log(`Original array is: ${numbers}`)
console.log(`Reversed array is: ${reversedNumbers}`)