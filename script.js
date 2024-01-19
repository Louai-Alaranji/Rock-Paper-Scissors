
const outcome = {
    rock : {rock: "tie", paper : "Computer wins", scissors : "you win!"},
    paper : {rock: "you win!", paper : "tie", scissors : "Computer wins"},
    scissors : {rock: "Computer wins", paper : "you win!", scissors : "tie"}
};

let score = JSON.parse(localStorage.getItem(("score"))) || {
    wins : 0,
    losses: 0,
    ties : 0
};


function playerMove(move){
    let result = '';
    let compMove = computerMove();
    result = outcome[move][compMove];

    // get the paragraphs to put the result in
    const jsResult = document.querySelector(".js-result");
    const jsMoves = document.querySelector(".js-moves");

    if (result == "you win!"){
        score.wins += 1;
    } else if (result == "Computer wins"){
        score.losses  += 1;
    } else if (result == "tie"){
        score.ties += 1;
    }

    // Display text on screen
    jsResult.innerText = result;
    jsMoves.innerText = "You: " + move + ", Computer: " + compMove;
    updateScore();
    localStorage.setItem("score", JSON.stringify(score));
    console.log(result);
}

function updateScore(){
    const jsScore = document.querySelector(".js-score");

    jsScore.innerText = "Wins: " + score.wins + ", Losses: " + score.losses +
    ", Ties: " + score.ties;
}
function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}

function computerMove(){
    let randomNumber = Math.random(); // this gives value between 0-0.999
    let computerMove = "";
    let move = Math.floor((randomNumber*3) +1);
    if (move == 1)
        computerMove = "rock";
    if (move == 2)
        computerMove = "paper";
    if(move == 3)
        computerMove = "scissors";
    return computerMove;
}
