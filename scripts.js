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

function playRound(humanChoice, computerChoice) {
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = function(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`Tie! Both players chose ${humanChoice}.`)
            return;
        }
        const options = ["rock", "paper", "scissors"];
        let humanValue = options.indexOf(humanChoice);
        let computerValue = options.indexOf(computerChoice);
        if (computerValue == humanValue + 1 % 3) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore == computerScore) console.log("It's a complete tie!");
    if (humanScore > computerScore) console.log("You win it all!");
    if (humanScore < computerScore) console.log("You lost to the computer :(");
}

playGame();