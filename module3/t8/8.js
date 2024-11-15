"use strict";

document.getElementById("start").addEventListener("click", () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result;
    let operation = document.getElementById("operation").value;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "sub") {
        result = num1 - num2;
    } else if (operation === "multi") {
        result = num1 * num2;
    } else if (operation === "div") {
        result = num1 / num2;
    }

    document.getElementById("result").innerText = result;
});