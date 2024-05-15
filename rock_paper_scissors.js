/*Objective: Create a two-player Rock Paper Scissors game in JavaScript, 
with one player being the user and the other being the computer.
 
Requirements:
 
Functionality:
 
User selects their choice (rock, paper, or scissors) through buttons or user input.
Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper, 0.67-1 scissors).
Winner is determined based on standard rock paper scissors rules.
Display the result (win, lose, tie) and user/computer choices on the screen.
Consider adding scorekeeping and a winner declaration for multiple rounds (optional).
Code Structure:
 
Use at least one function declaration.
Use at least one function expression.
Use at least one arrow function.
Use at least one anonymous function.
Use a ternary operator for a concise outcome display 
Utilize default parameters in a function
 
Cheat Mode:
 
Design a "cheat mode" feature that alters the computer's choice in some way (optional).
Come up with one specific implementation of cheat mode (e.g., computer always chooses scissors).*/

// const rock_clicked = () => console.log("rock clicked")


// const paper_clicked = () => console.log("paper clicked")
// const scissors_clicked = () => console.log("scissors clicked")


// const btn_rock = document.getElementById("rock")
// const btn_paper = document.getElementById("paper")
// const btn_scissors = document.getElementById("scissors")


// btn_rock.addEventListener('click', rock_clicked)
// btn_rock.addEventListener('click', paper_clicked)
// btn_rock.addEventListener('click', scissors_clicked)

let userMoveUpdated
let computerMoveUpdated
function user(userMove) {
    switch (userMove) {
        case 1:
            console.log("rock")
            userMoveUpdated = 1
            computer()
            // console.log(userMoveUpdated)
            return
        case 2:
            console.log("paper")
            userMoveUpdated = 2
            computer()
            // console.log(userMoveUpdated)
            return
        case 3:
            console.log("scissors")
            userMoveUpdated = 3
            computer()
            // console.log(userMoveUpdated)
            return
        default:
            console.log("play again")
    }
    // console.log("here")
    // return userMove
    // computer()
    checkWinner()
}





function computer() {
    // console.log("comp")
    let computerMove = Math.random();
    if (computerMove <= 0.33) {
        computerMoveUpdated = 1
        // console.log(computerMoveUpdated)
        console.log("rock")
    } else if (computerMove >= 0.34 && computerMove <= 0.66) {
        computerMoveUpdated = 3
        // console.log(computerMoveUpdated)
        console.log("paper")
    } else if (computerMove >= 0.67 && computerMove <= 1) {
        computerMoveUpdated = 3
        // console.log(computerMoveUpdated)
        console.log("scissors")
    } else {
        console.log("Invalid")
        user()
    }
    return computerMove


}
user()

function checkWinner() {
    if (userMoveUpdated === computerMoveUpdated) {
        console.log("Tie")
    } else if (userMoveUpdated === 1 && computerMoveUpdated == 3) {
        console.log("user won")
    } else if (userMoveUpdated === 3 && computerMoveUpdated === 2) {
        console.log("user won")
    } else if (computerMoveUpdated === 1 && userMoveUpdated === 3) {
        console.log("computer won")
    } else {
        console.log("computer won")
    }

}
