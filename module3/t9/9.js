"use strict";

document.getElementById("start").addEventListener("click", () => {
    let calculationText = document.getElementById("calculation").value;
    let operands = [];
    let operand1, operand2, result;

    if (calculationText.includes("+")) {
         operands = calculationText.split("+");
         operand1 = parseInt(operands[0]);
         operand2 = parseInt(operands[1]);
         result = operand1 + operand2;
    } else if (calculationText.includes("-")) {
        operands = calculationText.split("-");
        operand1 = parseInt(operands[0]);
        operand2 = parseInt(operands[1]);
        result = operand1 - operand2;
    } else if (calculationText.includes("*")) {
        operands = calculationText.split("*");
        operand1 = parseInt(operands[0]);
        operand2 = parseInt(operands[1]);
        result = operand1 * operand2;
    } else if (calculationText.includes("/")) {
        operands = calculationText.split("/");
        operand1 = parseInt(operands[0]);
        operand2 = parseInt(operands[1]);
        result = operand1 / operand2;
    }

    document.getElementById("result").innerText = result;
});