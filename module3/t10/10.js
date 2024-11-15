"use strict";

document.querySelector("#source").addEventListener("submit", () => {
    event.preventDefault();

    let firstName = document.querySelector("#source input[name='firstname']").value;
    let lastName = document.querySelector("#source input[name='lastname']").value;

    document.querySelector("#target").innerHTML = `Your name is ${firstName} ${lastName}`;
});