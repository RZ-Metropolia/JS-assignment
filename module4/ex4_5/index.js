"use strict";

async function getRandomJoke() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const json = await response.json();

    console.log(json.value);
}

getRandomJoke().then();

