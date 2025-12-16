// Should randomly return rock, paper, scissor
// FUNCTION getComputerChoice()
// make getComputerChoice() return rock, paper, scissor, according to if Math.random() is smaller bigger than 0.33

function randomInteger(num1, num2) {
    return Math.floor( Math.random() * 3 ) + 1;
}

function getComputerChoice() {
    let result = randomInteger();
    if ( result > 2 ) {
        return "scissor";
    }
    else if ( result > 1 ) {
        return "paper";
    }
    else return "rock";
}


function getHumanChoice() {
    let promptText = `Write your choice: 
        rock 
        paper
        scissor`
    let result = prompt( promptText )
    return result;
}

// console.log(getHumanChoice());

function playRound( humanChoice, computerChoice ) {
    const humanChoiceLowerCase = humanChoice.toLowerCase();
    if ( humanChoiceLowerCase != computerChoice ) {
        if ( humanChoiceLowerCase === "rock" ) {
            if ( computerChoice === "scissor" ) {
                console.log( `You win, ${humanChoiceLowerCase} beats ${computerChoice}` )
                // return humanScore += 1;
                return "human";
            }
            //( computerChoice === "paper" )
            else {
                console.log( `You lose, ${computerChoice} beats ${humanChoiceLowerCase}` )
                // return computerScore += 1;
                return "computer";
            }
        }
        // human-> paper 
        else if ( humanChoiceLowerCase === "paper" ) {
            if (computerChoice == "scissor") {
                console.log( `You lose, ${computerChoice} beats ${humanChoiceLowerCase}` )
                // return computerScore += 1; 
                return "computer";
            }
            // computer -> rock
            else {
                console.log( `You win, ${humanChoiceLowerCase} beats ${computerChoice}` )
                // return humanScore += 1;
                return "human";
            }
        }
        // human -> scissor
        else {
            if ( computerChoice === "paper" ) {
                console.log( `You win, ${humanChoiceLowerCase} beats ${computerChoice}` )
                // return humanScore += 1;
                return "human";
            }
            else {
                console.log( `You lose, ${computerChoice} beats ${humanChoiceLowerCase}` )
                // return computerScore += 1; 
                return "computer";
            }
        }
    }
    else return console.log(`Tie, nobody gets a point. Computer [${computerChoice}] Human [${humanChoiceLowerCase}]`);
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        // console.log("Computer [" + computerSelection + "]");
        const humanSelection = getHumanChoice();

        const result = playRound( humanSelection, computerSelection );
        if ( result === "human" ) {
            humanScore += 1;
        }
        else if ( result === "computer" ) {
            computerScore += 1;
        }
        else tie += 1;
        console.log(`Scores:
            Human: ${humanScore}
            Computer: ${computerScore}
            Ties: ${tie}`)
    }
}

playGame();
