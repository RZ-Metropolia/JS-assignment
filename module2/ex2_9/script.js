"use strict";

function even(intArray) {
    const result = [];

    for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] % 2 === 0) {
            result.push(intArray[i]);
        }
    }
    return result;
}

// main program
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`The original array: ${numbers}`);
console.log(`The array with only even numbers: ${even(numbers)}`);