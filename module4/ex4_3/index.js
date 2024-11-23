"use strict";

const apiForm = document.querySelector("form");
apiForm.addEventListener('submit', async () => {
    event.preventDefault();

    const query = document.getElementById("query").value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData);

    const divResults = document.createElement("div");
    divResults.setAttribute("id", "results");

    for (let item of jsonData) {
        // h2
        const h2 = document.createElement("h2");
        h2.innerText = item.show.name;
        const a = document.createElement("a");
        a.setAttribute("href", item.show.url);
        a.setAttribute("target", "_blank");
        a.appendChild(h2);

        // img
        const img = document.createElement("img");
        img.setAttribute("src", item.show.image?.medium);
        img.setAttribute("alt", `${item.show.name}-cover`);

        // div - summary
        const div = document.createElement("div");
        div.innerHTML = item.show.summary;

        // article
        const article = document.createElement("article");
        article.appendChild(a);
        article.appendChild(img);
        article.appendChild(div);

        divResults.append(article);
    }

    document.body.append(divResults);
});