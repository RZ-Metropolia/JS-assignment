"use strict";

function mouseOverEffect() {
    document.getElementById("target").setAttribute("src", "./img/picB.jpg");
}

function mouseLeaveEffect() {
    document.getElementById("target").setAttribute("src", "./img/picA.jpg");
}

const element = document.getElementById("trigger");

element.addEventListener("mouseover", mouseOverEffect);
element.addEventListener("mouseleave", mouseLeaveEffect);