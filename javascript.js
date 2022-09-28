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

let gamePlay = (selection, computerSelection) => {
    let playerSelection = selection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Is this... world peace?';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Humanity is saved';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Human extinction is inevitable';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Humanity is saved';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Human extinction is inevitable';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Humanity is saved';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Human extinction is inevitable';
    }
    else {
        return 'Wrong answer, try again'
    }
};

const game = () => {
    for (let i = 0; i < 5; i++) {
        const selection = prompt('Rock, Paper, or Scissors? To save humanity')
const computerSelection = getComputerChoice();
        console.log(gamePlay(selection, computerSelection));
    }
};

console.log(game());