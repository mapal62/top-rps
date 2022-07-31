console.log('connect OK');
// output strings constants
const rock = 'rock crushes scissors';
const paper = 'paper covers rock';
const scissors = 'scissors cuts paper';
const loss = 'You lose!';
const win = 'You win!';
const draw = 'Draw!';


function getComputerChoice() {
    const variants = {
        0: 'rock',
        1: 'paper',
        2: 'scissors'
    }
    const choice = variants[Math.floor(Math.random()*3)];
    return choice;
}

