"use strict";

let year = parseInt(prompt("Please enter the year"));
let isLeapYear;
let result;

if (year % 100 === 0 && year % 400 !== 0) {
    isLeapYear = false;
} else {
    isLeapYear = (year % 4 === 0);
}

if (isLeapYear) {
    result = year + " is leap year.<br>";
} else {
    result = year + " is not leap year.<br>";
}

document.querySelector("#target").innerHTML = result