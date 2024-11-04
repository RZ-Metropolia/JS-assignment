"use strict";

let studentName = prompt("Please enter your name");

let classNumber = Math.floor(Math.random() * 4 + 1);
let className;

if (classNumber === 1) {
        className = "Gryffindor";
} else if (classNumber === 2) {
    className = "Slytherin";
} else if (classNumber === 3) {
    className = "Hufflepuff";
} else if (classNumber === 4) {
    className = "Ravenclaw";
}

let result = studentName + ", you are " + className + ".<br>"

document.querySelector("#target").innerHTML = result;
