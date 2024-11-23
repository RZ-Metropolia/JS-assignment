"use strict";

const apiForm = document.querySelector("form");
apiForm.addEventListener('submit', async () => {
    event.preventDefault();

    const query = document.getElementById("query").value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData);
});