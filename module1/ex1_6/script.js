"use strict";

let userResponse = confirm("Should I calculate the square root?");
let result = "";

if (userResponse) {
    let number = parseFloat(prompt("Please enter the number"))
    if (number >= 0) {
        result = "The root of " + number + " is " + Math.sqrt(number) + ".";
    } else {
        result = "The square toot of a negative number is not defined."
    }
} else {
    result = "The square root is not calculated."
}

document.querySelector("#target").innerHTML = result;