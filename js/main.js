let userScore = 0;
let compScore = 0;

//CASHING THE D0M (storing the following reference points into variables, saving things for future use; it is more efficient in terms of performance and convenience)

let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return choices [random];
}

function changeToWord(letter){
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
    return "Rock";
}

function win(userChoice, computerChoice){
     userScore++;
     userScore_span.innerHTML = userScore;
     compScore_span.innerHTML = compScore;
     const smallUserWord = "user".fontsize(3);
     const smallCompWord = "comp".fontsize(3);
     const userChoice_div = document.getElementById(userChoice);
     result_div.innerHTML = `${changeToWord(userChoice)}${smallUserWord} beats ${changeToWord(computerChoice)}${smallCompWord}, you win! ^_^`
     userChoice_div.classList.add("green-glow");
     setTimeout (() =>  userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice){
     compScore++;
     userScore_span.innerHTML = userScore;
     compScore_span.innerHTML = compScore;
     const smallUserWord = "user".fontsize(3);
     const smallCompWord = "comp".fontsize(3);
     const userChoice_div = document.getElementById(userChoice);
     result_div.innerHTML = `${changeToWord(userChoice)}${smallUserWord} loses to ${changeToWord(computerChoice)}${smallCompWord}, you lost! :(`
     userChoice_div.classList.add("red-glow");
     setTimeout (() =>  userChoice_div.classList.remove("red-glow"), 500);
}


function tie(userChoice, computerChoice){
     const smallUserWord = "user".fontsize(3);
     const smallCompWord = "comp".fontsize(3);
     const userChoice_div = document.getElementById(userChoice);
     result_div.innerHTML = `${changeToWord(userChoice)}${smallUserWord} equals ${changeToWord(computerChoice)}${smallCompWord}, It's a tie!`
     userChoice_div.classList.add("gray-glow");
     setTimeout (() => userChoice_div.classList.remove("gray-glow"), 500);
}


function game(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', function () {
        game("s")
    })

}

main();