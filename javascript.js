let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let getComputerChoice = Math.ceil(Math.random() * 3);
    if (getComputerChoice == 1){
        console.log("rock");
    }
    else if (getComputerChoice == 2){
        console.log("paper");
    }
    else {
        console.log("scissers");
    }
}

function getHumanChoice() {
    let sign = prompt("rock, paper or scissors?");
    if (sign === "rock") {
        alert("rock");
    }
    else if (sign === "paper"){
        alert("paper");
    }
    else {
        alert("scissors");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("Tie");
        }
        else if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            else {
                console.log("You won! Rock beats scissors");
                humanScore++;
            }
        }
        else if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            else {
                console.log("You lose! Scissors beats paper");
                computerScore++;
            }
        }
        else if (humanChoice == 'scissors') {
            if (computerChoice == 'rock') {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            }
            else {
                console.log("You win! Scissors beats paper");
                humanScore++;
            }
        }
        playRound;
        playRound;
        playRound;
        playRound;
        playRound;
    }
   
}

