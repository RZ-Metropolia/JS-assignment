"use strict";

function rollDice(side) {
    return Math.floor(Math.random() * side) + 1;
}

// main program
let side = parseInt(prompt("Please enter the number of the sides of the dice"));

alert("Now let's roll the dice until we get the maximum number!");

let result = "<ul>\n";
while (true) {
    let eye = rollDice(side);
    result += `\t<li>${eye}</li>\n`;

    if (eye === side) {
        break;
    }
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;