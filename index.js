var sign = 1;

function startGame() {
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("message").innerHTML = "Choose a box: X turn."
}

function checkBox(y) {
    let x = document.getElementById(y).innerHTML;
    if (x == "") {
        if (sign % 2 == 0) {
            document.getElementById(y).innerHTML = "O";
            document.getElementById("message").innerHTML = "Choose a box: X turn.";
            verification("O");
        } else {
            document.getElementById(y).innerHTML = "X";
            document.getElementById("message").innerHTML = "Choose a box: O turn.";
            verification("X");
        }
        ++sign;
    } else {
        document.getElementById("message").innerHTML = "This box has already been used, Try an unused one.";
        
    }
}

function verification(s) {
    for (let i = 1, x = 0, k = 1; i <= 3; ++i) {
        for (let j = 1; j <= 3; ++j, ++k) {
            if (document.getElementById(k).innerHTML == s) {
                ++x;
            } 
        }
        if (x == 3) {
            endGame(s + " Win the game.");
        }
        x = 0;
    }
    for (let i = 1, x = 0; i <= 3; ++i) {
        for (let j = 1, k = i; j <= 3; ++j, k += 3) {
            if (document.getElementById(k).innerHTML == s) {
                ++x;
            } 
        }
        if (x == 3) {
            endGame(s + " Win the game.");
        }
        x = 0;
    }
    for (let i = 1, x = 0, k = 1; i <= 3; ++i, k += 4){
        if (document.getElementById(k).innerHTML == s) {
            ++x;
        }
        if (x == 3) {
            endGame(s + " Win the game.");
        }
    }
    for (let i = 1, x = 0, k = 3; i <= 3; ++i, k += 2){
        if (document.getElementById(k).innerHTML == s) {
            ++x;
        }
        if (x == 3) {
            endGame(s + " Win the game.");
        }
    }
    if (sign == 9) {
        endGame("Draw");
    }

}

function endGame(s) {
    sign = 1;
    document.getElementById("message").innerHTML = s;
    document.getElementById("board").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "visible";
    for (let i = 1; i <= 10; ++i) {
        document.getElementById(i).innerHTML = "";
    }
}