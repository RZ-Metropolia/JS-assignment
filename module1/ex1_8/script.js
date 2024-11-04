"use strict";

let startYear = parseInt(prompt("Please enter the start year"))
let endYear = parseInt(prompt("Please enter the end year"))
let result = ""

result = "<ul>\n";
for(let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
        } else {
            result += "\t<li>" + year + "</li>\n";
        }
    } else {
    }
}
result += "</ul>\n";

document.querySelector("body").innerHTML = result;