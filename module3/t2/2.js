"use strict";

const listItem1 = document.createElement("li");
listItem1.innerText = "First item";
const listItem2 = document.createElement("li");
listItem2.innerText = "Second item";
const listItem3 = document.createElement("li");
listItem3.innerText = "Third item";

document.getElementById("target").appendChild(listItem1);
document.getElementById("target").appendChild(listItem2);
document.getElementById("target").appendChild(listItem3);

document.getElementsByTagName("li")[1].setAttribute("class","my-item");