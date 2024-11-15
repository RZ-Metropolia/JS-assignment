"use strict";


function clickAlert() {
    alert("Button Clicked");
}

const element = document.querySelector("button");

element.addEventListener("click", clickAlert);