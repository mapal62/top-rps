console.log('connect OK');
// output strings constants
const rock = 'rock crushes scissors';
const paper = 'paper covers rock';
const scissors = 'scissors cuts paper';
const loss = 'You lose!';
const win = 'You win!';
const draw = 'Draw!';
const variants = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}


function getComputerChoice() {
    const choice = variants[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `${draw}`;
    }

    if (playerSelection === variants[0]) {
        if (computerSelection === variants[1]) {
            return `${loss} ${paper}`;
        } else {
            return `${win} ${rock}`;
        }
    }

    if (playerSelection === variants[1]) {
        if (computerSelection === variants[2]) {
            return `${loss} ${scissors}`;
        } else {
            return `${win} ${paper}`;
        }
    }
    if (playerSelection === variants[2]) {
        if (computerSelection === variants[0]) {
            return `${loss} ${rock}`;
        } else {
            return `${win} ${scissors}`;
        }
    }
}

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();
console.log('ROUND: ', playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
