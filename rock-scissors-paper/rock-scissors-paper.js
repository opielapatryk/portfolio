const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");
const choiceButton = document.querySelectorAll("button");
let userChoice 

function randomNumber(){
    let ran = Math.floor(Math.random() * 3 + 1)
    if (ran == 1){
        computerChoice.innerHTML = "rock"
    } else if (ran == 2){
        computerChoice.innerHTML = "scissors"
    } else {
        computerChoice.innerHTML = "paper"
    }

    if (ran == 1 && userChoice == "rock"){
        result.innerHTML = "It is a draw!"
    } else if (ran == 1 && userChoice == "paper"){
        result.innerHTML = "You win!"
    } else if (ran == 1 && userChoice == "scissors"){
        result.innerHTML = "You lose!"
    } 

    if (ran == 2 && userChoice == "rock"){
        result.innerHTML = "You win!!"
    } else if (ran == 2 && userChoice == "paper"){
        result.innerHTML = "You lose!"
    } else if (ran == 2 && userChoice == "scissors"){
        result.innerHTML = "It is a draw!!"
    } 

    if (ran == 3 && userChoice == "rock"){
        result.innerHTML = "You lose!!"
    } else if (ran == 3 && userChoice == "paper"){
        result.innerHTML = "It is a draw!"
    } else if (ran == 3 && userChoice == "scissors"){
        result.innerHTML = "You win!"
    } 
    
}

choiceButton.forEach(choiceButton => choiceButton.addEventListener("click", (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
    randomNumber()
    
}))
