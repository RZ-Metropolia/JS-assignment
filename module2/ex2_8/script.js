"use strict";

function concat(stringArray) {
    let result = "";
    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];
    }
    return result;
}

// main program
const names = ["Johnny", "DeeDee", "Joey", "Marky"];

document.querySelector("body").innerHTML = concat(names);