function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return  "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const valid = ["rock", "paper", "scissors"];
    let choice = "";
    while (!valid.includes(choice)) {
        choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    }
    return choice;
}

console.log(getHumanChoice());