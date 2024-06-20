function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
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

let humanScore = 0;
let computerScore = 0;


let playRound = function (humanChoice, computerChoice) {
    resultText = document.querySelector('#result');
    if (humanChoice == computerChoice) {
        resultText.textContent = `Tie! Both players chose ${humanChoice}.`;
        return;
    }
    const options = ["rock", "paper", "scissors"];
    let humanValue = options.indexOf(humanChoice);
    let computerValue = options.indexOf(computerChoice);
    if (computerValue == humanValue + 1 % 3) {
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        document.querySelector('#computer-score').textContent = computerScore;
    } else {
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        document.querySelector('#human-score').textContent = humanScore;
    }
}

let updateGame = function(humanChoice) {
    if(humanScore >=5 || computerScore >= 5) {
        humanScore = 0;
        computerScore = 0;
        document.querySelector('#human-score').textContent = humanScore;
        document.querySelector('#computer-score').textContent = computerScore;
    }  
    playRound(humanChoice, getComputerChoice());
    resultText = document.querySelector('#result');
    if (humanScore >= 5) resultText.textContent = "YOU WIN IT ALL";
    if (computerScore >= 5) resultText.textContent = "THE COMPUTER WINS";
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        updateGame(e.target.textContent.toLowerCase())
    })
})