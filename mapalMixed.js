//comment controlled mixed object vs. array base
console.log('connect OK');

let attempt = 5;
// output strings constants
const rock = 'Rock crushes scissors.';
const paper = 'Paper covers rock.';
const scissors = 'Scissors cuts paper.';
const loss = 'You lose!';
const win = 'You win!';
const draw = 'Draw!';

//----------object based----------
/* const variants = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
}
 */
//----------array based-----------
// a choice has been beaten by the next element, last by the first
const variants = ['rock', 'paper', 'scissors'];
const reason = {
    'rock': 'Rock crushes scissors.',
    'paper': 'Paper covers rock.',
    'scissors': 'Scissors cuts paper.'
}

//score
let player;
let computer;

//start game
console.log(game(attempt));

// ---functional part---
function getComputerChoice() {

    //----------object based----------
    // const choice = variants[Math.floor(Math.random() * 3)];
    //----------array based-----------    
    const choice = variants[Math.floor(Math.random() * variants.length)];

    return choice;
}

function getUserChoice(round) {
    let choice;
    let message = 'Please choose: ';
    variants.forEach(element => {
        message += `${element.toUpperCase()} / `;
    });
    message += `end !\nROUND: ${round + 1}`;
    while (true) {

        //----------object based----------        
        // choice = prompt(`Please ENTER rock / paper / scissors / end !\nROUND: ${round + 1}`).toLowerCase().trim();
        //----------array based-----------
        choice = prompt(message).toLowerCase().trim();
        if (!choice || choice === 'end') {
            return 'end';
            //----------object based----------        
            // } else if (Object.values(variants).includes(choice)) {
            //----------array based-----------
        } else if (variants.includes(choice)) {
            return choice;
        } else {
            alert('Invalid choice\nTRY AGAIN !');
            continue;
        }
    }
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
        //----------object based----------        
        // console.log(playRound(playerSelection, computerSelection));
        //----------array based-----------
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
