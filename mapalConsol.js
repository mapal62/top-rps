console.log('connect OK');


let attempt = 5;
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

//score
let player;
let computer;

//create graphical user interface
//buildGui();

//start game
console.log(game(attempt));

// ---functional part---
function getComputerChoice() {
    return variants[Math.floor(Math.random() * variants.length)];
}

function getUserChoice(round) {
    let choice;
    let message = 'Please choose: ';
    variants.forEach(element => {
        message += `${element.toUpperCase()} / `;
    });
    message += `end !\nROUND: ${round + 1}`;
    while (true) {
        choice = prompt(message).toLowerCase().trim();
        if (!choice || choice === 'end') {
            return 'end';
        } else if (variants.includes(choice)) {
            return choice;
        } else {
            alert('Invalid choice\nTRY AGAIN !');
            continue;
        }
    }
}


function playWithArray(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `${draw}`;
    }
    const index = variants.indexOf(playerSelection);
    const nextIndex = (index + 1) % variants.length;
    if (computerSelection === variants[nextIndex]) {
        computer++;
        return `${loss} ${reason[computerSelection]}`;
    } else {
        player++;
        return `${win} ${reason[playerSelection]}`
    }

}

function game(rounds) {
    player = 0;
    computer = 0;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = getUserChoice(i); //'rock';
        if (playerSelection === 'end') {
            alert('Your choice was END the game :)');
            break;
        }
        const computerSelection = getComputerChoice();
        console.log(`ROUND ${i + 1}: `, playerSelection, computerSelection);
        console.log(playWithArray(playerSelection, computerSelection));
    }
    if (player === computer) {
        return `${draw} ${player} to ${computer}`;
    } else if (player > computer) {
        return `${win} ${player} to ${computer}`;
    } else {
        return `${loss} ${player} to ${computer}`;
    }
}

function buildGui(){
    player = 0;
    computer = 0;

    const box = document.getElementById('box');
    const first = document.createElement('button');
    first.innerText = variants[0];
    first.addEventListener('click', userClicked);
    box.appendChild(first);

    const second = document.createElement('button');
    second.innerText = variants[1];
    second.addEventListener('click', userClicked);
    box.appendChild(second);

    const third = document.createElement('button');
    third.innerText = variants[2];
    third.addEventListener('click', userClicked);
    box.appendChild(third);

}

function userClicked(){
    const result = document.getElementById('result');
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    result.innerText = playWithArray(playerSelection, computerSelection);
result.innerText += `\nPlayer: ${player}, Computer: ${computer}`
}
