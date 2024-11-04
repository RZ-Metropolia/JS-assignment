"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// main program
alert("Let's roll a dice until we get a 6!");

let result = "<ul>\n";
while (true) {
    let eye = rollDice();
    result += `\t<li>${eye}</li>\n`;

    if (eye === 6) {
        break;
    }
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;
