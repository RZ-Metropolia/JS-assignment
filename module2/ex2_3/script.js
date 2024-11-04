"use strict";

const dogs = [];

for (let i = 1; i <= 6; i++) {
    let dogName = prompt(`Please enter the name of dog ${i}`);
    dogs.push(dogName);
}

const dogsReversed = dogs.sort().reverse();

let result = "<ul>\n";
for (let index = 0; index < dogs.length; index++) {
    result += `\t<li>${dogsReversed[index]}</li>\n`;
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;
