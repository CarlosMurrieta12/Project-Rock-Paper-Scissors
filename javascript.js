const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else if (randomNumber === 2) {
        return 'scissors';
    }
};

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerScoreSpan = document.querySelector('.player_score');
const computerScoreSpan = document.querySelector('.computer_score');

let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = `It's a tie! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = 'You win!';
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = 'You lost!';
        outcomeDiv.appendChild(p);
        computerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = 'You win!'
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = 'You lost!';
        outcomeDiv.appendChild(p);
        computerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = 'You win!'
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = 'You lost!';
        outcomeDiv.appendChild(p);
        computerScore++;
    }
};

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won the game! Player: ${playerScore} Computer Score: ${computerScore}`;
        outcomeDiv.appendChild(h2);
    }
    else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You lost the game! Player: ${playerScore} Computer Score: ${computerScore}`;
        outcomeDiv.appendChild(h2);
    }
};

const outcomeDiv = document.querySelector('.outcome');

const runningScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
};

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    runningScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    runningScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    runningScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

// for (let i = 0; i < 5; i++) {
//     const selection = prompt('Rock, Paper, or Scissors? To save humanity')
//     const computerSelection = getComputerChoice();
//     console.log(playRound(selection, computerSelection));
// };