// Randomly generate computer choice
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Play 5 rounds
function playGame() {
    // Play one round
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie";
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            return "You Lose! " + computerChoice + " beats " + humanChoice;
        }
    }
    
    // declare the players score variables
    let humanScore = 0;
    let computerScore = 0;

    function capitalize(humanChoice) {
        let allLowerCase = humanChoice.toLowerCase();
        let firstLetterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase(1);
        console.log(firstLetterCap);
        return firstLetterCap;
    }

    for (let i = 0; i < 5; i++) {
        // Get user choice
        function getHumanChoice() {
            let sign = prompt("rock, paper or scissors?");
            if (sign === "rock") {
                return "rock";
            }
            else if (sign === "paper"){
                return "paper";
            }
            else {
                return "scissors";
            }
        }

        const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();


        const result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result.includes("Win")) {
            humanScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (Score < computerScore) {
        console.log("Sorry, you lose the game");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}
playGame();
