"use strict";

// main program

// Initial the candidates array
let candidatesNumber = parseInt(prompt("Please enter the number of candidates"));
const candidates = [];
for (let i = 1; i <= candidatesNumber; i++) {
    let candidateName = prompt(`Enter the name of candidate ${i}`).toLowerCase();

    const candidateInfo = {
        name: candidateName,
        votes: 0,
    }
    candidates.push(candidateInfo);
}

// Create an array to store the names of all candidates
let candidatesNames = [];
for (let index in candidates) {
    candidatesNames.push(candidates[index].name);
}

// Vote process
let votersNumber = parseInt(prompt("Please enter the number of voters number"));
for (let i = 1; i <= votersNumber; i++) {
    let voterDecision = prompt(`Voter ${i}, please enter the name of the candidate you want to vote`);

    if (candidatesNames.includes(voterDecision)) {
        for (let index in candidates) {
            if (candidates[index].name === voterDecision) {
                candidates[index].votes++;
            }
        }
    } else {
        alert("Invalid candidate name. This vote will be regarded as invalid.");
    }
}

// Count the votes
let candidatesVotes = [];
for (let index in candidates) {
    candidatesVotes.push(candidates[index].votes);
}
candidatesVotes.sort((a, b) => b - a);

let highestVotes = candidatesVotes[0];

// Announce the result
for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes === highestVotes) {
        console.log(`The winner is ${candidates[i].name} with ${candidates[i].votes} votes.`);
    }
}

console.log("Results:\n");
for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}




