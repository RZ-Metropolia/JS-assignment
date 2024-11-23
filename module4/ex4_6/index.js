"use strict";

const formElement = document.querySelector("form");
formElement.addEventListener("submit", async ()=> {
    event.preventDefault();

    const query = document.getElementById("query").value;
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const json = await response.json();

    for (const joke of json.result) {
        const p = document.createElement("p");
        p.innerText = joke.value;

        const article = document.createElement("article");
        article.appendChild(p);

        document.body.appendChild(article);
    }
});