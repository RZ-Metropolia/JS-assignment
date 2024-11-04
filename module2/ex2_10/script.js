"use strict";

// main program
let candidatesNumber = parseInt(prompt("Please enter the number of candidates"));
// Initial the candidates array
const candidates = [];
for (let i = 1; i <= candidatesNumber; i++) {
    let candidateName = prompt(`Enter the name of candidate ${i}`).toLowerCase();

    const candidateInfo = {
        name: candidateName,
        votes: 0,
    }

    candidates.push(candidateInfo);
}

// Create an array of all candidates' names
const candidatesNames = [];
for (let i = 0; i < candidates.length; i++) {
    candidatesNames.push(candidates[i].name);
}

// Vote process
let voterNumber = parseInt(prompt("Please enter the number of voters"));

for (let i = 1; i <= voterNumber; i++) {
    let voteName = prompt(`Voter ${i}. Please enter the name of the candidate you want to vote`).toLowerCase();

    if (!candidatesNames.includes(voteName)) {
        alert("Invalid candidate name!This vote will be treated as invalid.");
    } else {
            for (let i = 0; i < candidates.length; i++) {
                if (candidates[i].name === voteName) {
                    candidates[i].votes += 1;
            }
        }
    }
}



