function getComputerChoice() {
    let number = Math.floor(Math.random() * 9) + 1;
    
    let weapon;

    if(number % 3 == 0) {
        weapon = "rock";
    } else if (number % 3 == 1) {
        weapon = "paper";
    } else {
        weapon = "scissors";
    }

    return weapon;
}

function getPlayerInput() {
    let choice = prompt("Rock, paper or scissors?", "");
    choice = choice.toLowerCase();

    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Your choice is not amongst the three valid options!");
    }

}

function playRound(playerSelection, computerSelectiion) {

    // 0 - tie ; 1 - computer won ; 2 - player won

    if(playerSelection === "rock") {
        if(computerSelectiion === "rock") {
            return 0;
        } else if (computerSelectiion === "paper") {
            return 1;
        } else if (computerSelectiion === "scissors") {
            return 2;
        }  
    } else if (playerSelection === "paper") {
        if(computerSelectiion === "rock") {
            return 2;
        } else if (computerSelectiion === "paper") {
            return 0;
        } else if (computerSelectiion === "scissors") {
            return 1;
        } 
    } else {
        if(computerSelectiion === "rock") {
            return 1;
        } else if (computerSelectiion === "paper") {
            return 2;
        } else if (computerSelectiion === "scissors") {
            return 0;
        } 
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let outcome;

    for (let index = 0; index < 5; index++) {
        outcome = playRound(getPlayerInput(), getComputerChoice());

        if (outcome === 2) {
            playerScore++;
            console.log(`You have won this round! Your score is now: ${playerScore}!`)
        } else if (outcome === 1) {
            computerScore++;
            console.log(`The computer has won this round! Its score is now: ${computerScore}!`)
        } else {
            console.log(`It is a tie, nobody wins a point! The game score is now: Player: ${playerScore} vs Computer: ${computerScore}!`)
        }
    }

    if(playerScore > computerScore) {
        console.log(`Congratulations, you have won! Your score is: ${playerScore}!`)
    } else if (playerScore < computerScore) {
        console.log(`Unfortunately, you have lost! Computer's score is: ${computerScore}!`)
    } else {
        console.log(`The game is a tie! Both your scores are ${playerScore}`)
    }
    
}