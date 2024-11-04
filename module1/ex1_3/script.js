"use strict";

let num1 = parseFloat(prompt("Please enter the first number"));
let num2 = parseFloat(prompt("Please enter the second number"));
let num3 = parseFloat(prompt("Please enter the third number"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

let result = "The sum of the three numbers is " + sum + ".<br>";
result += "The product of the three numbers is " + product + ".<br>";
result += "The average of the three numbers is " + average + ".";

document.querySelector("#target").innerHTML = result;
