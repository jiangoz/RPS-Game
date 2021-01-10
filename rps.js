// computer will randomly choose RPS
function computerPlay() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "Rock";
    } else if (randNum <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// plays a single round of RPS
function matchRound(playerChoice, computerChoice) {

    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (player === "rock") {
        switch (computer) {
            case "rock": return "Both had Rock. It's a tie!";
            case "paper": return "Computer's Paper beats Player's Rock. Computer wins!";
            case "scissors": return "Player's Rock beats Computer's Scissors. Player wins!";
        }
    }
    else if (player === "paper") {
        switch (computer) {
            case "rock": return "Player's Paper beats Computer's Rock. Player wins!";
            case "paper": return "Both had Paper. It's a tie!";
            case "scissors": return "Computer's Scissors beats Player's Paper. Computer wins!";
        }
    }
    else if (player === "scissors") {
        switch (computer) {
            case "rock": return "Computer's Rock beats Player's Scissors. Computer wins!";
            case "paper": return "Player's Scissors beats Computer's Paper. Player wins!";
            case "scissors": return "Both had Scissors. It's a tie!";
        }
    }
    return `Error: Player gave invalid input of "${playerChoice}"`;
}

// Event listeners

const rockBtn = document.querySelector('#rock');
const result = document.querySelector('#roundMsg');
rockBtn.addEventListener('click', () => {
    result.textContent = matchRound("rock", computerPlay());
    console.log("clicked rock");
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    result.textContent = matchRound("paper", computerPlay());
    console.log("clicked paper");
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    result.textContent = matchRound("scissors", computerPlay());
    console.log("clicked scissors");
});

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    result.textContent = "";
    console.log("clicked reset");
});

