"use strict";

const participants = [];
let participantsNumber = parseInt(prompt("Please enter the number of participants"));

for (let i = 1; i <= participantsNumber; i++) {
    let name = prompt(`Enter the name of participant ${i}`);
    participants.push(name);
}

let result = "<ol>\n";
for (let index = 0; index < participants.length; index++) {
    result += `\t<li>${participants[index]}</li>\n`;
}
result += "</ol>";

console.log(result);

document.querySelector("body").innerHTML = result;
