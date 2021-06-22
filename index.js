var guess, attempts = 10, guessWord = 0;

function setWord() {
    guess = document.getElementById("word").value;
    guess = guess.toUpperCase();
    let validity = document.getElementById("word");
    if (validity.checkValidity() && guess != "") {
        document.getElementById("verification").innerHTML = "";
        document.getElementById("word").style.visibility = "hidden";
        document.getElementById("submit").style.visibility = "hidden";
        //Create buttons for the word to be guessed.
        for (let i = 0; i < guess.length; ++i) {
            let button = document.createElement("BUTTON");
            button.innerHTML = "?";
            button.id = i;
            document.getElementById("wordToGuess").appendChild(button);
        }
        //Create buttons for all letters in the alphabet (uppercase)
        for (let i = 65; i <= 90; ++i) {       
            let button = document.createElement("BUTTON");
            button.innerHTML = String.fromCharCode(i);
            button.id = String.fromCharCode(i);
            document.getElementById("allButton").appendChild(button);
            button.onclick = function() {checkLetterInWord(String.fromCharCode(i))}
        }
    } else {
        document.getElementById("verification").innerHTML = "Enter only characters from A to Z."
    }
}

function checkLetterInWord(x) {
    if (guess.includes(x) == true) {
        for (let i = 0; i < guess.length; ++i) {
            if (guess.charAt(i) == x) {
                document.getElementById(i).innerHTML = x;
                ++guessWord;
            }
        }
        document.getElementById(x).remove();
        document.getElementById("verification").innerHTML = "You guessed a letter.";
        if (guessWord == guess.length) {
            document.getElementById("verification").innerHTML = "Win the game";
            endGame();
        }
    } else {
        document.getElementById(x).remove();
        --attempts;
        document.getElementById("verification").innerHTML = "You have " + attempts + " more attempts left."
        if (attempts == 0) {
            document.getElementById("verification").innerHTML = "Lose the game";
            endGame();
        }
    }
}

function endGame() {
    document.getElementById("wordToGuess").innerHTML = "";
    document.getElementById("allButton").innerHTML = "";
    document.getElementById("word").style.visibility = "visible";
    document.getElementById("submit").style.visibility = "visible";
    attempts = 10;
    guessWord = 0;
    restart();
}