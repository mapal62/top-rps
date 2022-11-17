console.log('connect OK');

// output strings constants
const loss = 'You lose!';
const win = 'You win!';
const draw = 'Draw!';

const variants = ['rock', 'paper', 'scissors'];
const reason = {
    'rock': 'Rock crushes scissors.',
    'paper': 'Paper covers rock.',
    'scissors': 'Scissors cuts paper.'
}
const hands = [
    './images/hand-back-fist-regular.svg',
    './images/hand-regular.svg',
    './images/hand-scissors-regular.svg',
    './images/circle-question-solid.svg'
]
//score
let player;
let computer;

//create graphical user interface
window.onload = () => buildGui();

// ---functional part---
function getComputerChoice() {
    return variants[Math.floor(Math.random() * variants.length)];
}

function playWithArray(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `${draw}\n`;
    }
    const index = variants.indexOf(playerSelection);
    const nextIndex = (index + 1) % variants.length;
    if (computerSelection === variants[nextIndex]) {
        computer++;
        return `${loss}\n${reason[computerSelection]}`;
    } else {
        player++;
        return `${win}\n${reason[playerSelection]}`
    }

}

function buildGui() {
    const cover = document.getElementById('covering');
    cover.addEventListener('click', (e) => {
        cover.hidden = true;
        player = 0;
        computer = 0;
        const result = document.querySelector('#result h3');
        result.innerText = '';
    })
    const boxes = document.querySelectorAll('.choice');
    boxes.forEach((box) => {
        box.addEventListener('click', userClicked)
    })
}

function userClicked() {
    const result = document.querySelector('#result h3');
    this.classList.add('selected');
    setTimeout(() => { afterChoice(this) }, 800);
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    showOpponent(computerSelection);
    console.log('Player: ', playerSelection, computerSelection);
    result.innerText = playWithArray(playerSelection, computerSelection);
    result.innerText += `\nPlayer: ${player}, Computer: ${computer}`
}
function afterChoice(item) {
    item.classList.remove('selected');
    const answer = document.getElementById('machine');
    answer.src = hands[3];

    if (player === 5 || computer === 5) {
        player > computer ? gameOver('player') : gameOver('computer')
    }
}
function gameOver(winner) {
    const final = document.getElementById('newgame');
    final.innerText = `
            ${winner === 'player' ? win : loss}\n${player} : ${computer}\nRESTART
            `
    const cover = document.getElementById('covering');
    cover.hidden = false;
}
function showOpponent(computerSelection) {
    const answer = document.getElementById('machine');
    const index = variants.indexOf(computerSelection);
    answer.src = hands[index];
}
