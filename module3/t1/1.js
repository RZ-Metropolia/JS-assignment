"use strict";

let result = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
`;

document.getElementById("target").innerHTML = result;
document.getElementById("target").setAttribute("class", "my-list");