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
let player;
let computer;


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
            computer++;
            return `${loss} ${paper}`;
        } else {
            player++;
            return `${win} ${rock}`;
        }
    }

    if (playerSelection === variants[1]) {
        if (computerSelection === variants[2]) {
            computer++;
            return `${loss} ${scissors}`;
        } else {
            player++;
            return `${win} ${paper}`;
        }
    }
    if (playerSelection === variants[2]) {
        if (computerSelection === variants[0]) {
            computer++;
            return `${loss} ${rock}`;
        } else {
            player++;
            return `${win} ${scissors}`;
        }
    }
}

function game(rounds) {
    player = 0;
    computer = 0;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        console.log(`ROUND ${i+1}: `, playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (player === computer) {
        return `${draw} ${player} to ${computer}`;
    } else if (player > computer) {
        return `${win} ${player} to ${computer}`;
    } else {
        return `${loss} ${player} to ${computer}`;
    }
}
