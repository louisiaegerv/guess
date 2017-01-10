var guessBtn = document.getElementById('guessBtn');
var guessField = document.getElementById("guessInput");
var prevGuess = document.getElementById('prevGuesses');
var guessStatus = document.getElementById('guessStatus');
var highLow = document.getElementById('highOrLow');
var container = document.getElementById('container');

var turn = 1;
var newGame;

var randNum = Math.floor(Math.random() * 100 + 1);
console.log("Rand num is " + randNum);

function checkGuess() { 
    var guess = Number(guessField.value);
    
    if (turn === 1) {
        prevGuess.textContent = 'Previous guesses: ';
    }
    prevGuess.textContent += guess + ' ';
    
    if (guess === randNum) {
        guessStatus.textContent = "Congratulations, you got it right";
        guessStatus.style.backgroundColor = "green";
        highLow.textContent = '';
        endGame();
    } 
    else if (turn === 10) {
        guessStatus.textContent = "You have run out of guesses. Game Over.";
        endGame();
    } 
    else {
        guessStatus.textContent = "Nope, guess again";
        guessStatus.style.backgroundColor = 'red';
        if(guess < randNum) 
            highLow.textContent = 'Too low';
        else if (guess > randNum)
            highLow.textContent = 'Too high';
    }
    
    turn++;
    guessField.value = '';
    guessField.focus();
}
function endGame(){
    guessField.disabled = true;
    guessBtn.disabled = true;
    newGame = document.createElement('button');
    newGame.textContent = "Start new game";
    document.querySelector('.container').appendChild(newGame);
    newGame.addEventListener('click', resetGame);
};
function resetGame() {
    turn = 1;
    
    var resultSection = document.querySelectorAll('.resultSection p');
    for(i = 0; i < resultSection.length; i++) {
        resultSection[i].textContent = '';
    }
    
    newGame.parentNode.removeChild(newGame);
    guessField.disabled = false;
    guessBtn.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    guessStatus.style.backgroundColor = 'white';
    randNum = Math.floor(Math.random() * 100 + 1);
}

guessBtn.addEventListener('click', checkGuess);
guessField.focus();