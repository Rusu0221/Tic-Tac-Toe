var sign = 1;

function startGame() {
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("message").innerHTML = "Choose a box: X turn."
}

function checkBox(id) {
    let x = document.getElementById(id).innerHTML;
    if (x == "") {
        if (sign % 2 == 0) {
            document.getElementById(id).innerHTML = "O";
            document.getElementById("message").innerHTML = "Choose a box: X turn.";
            verification("O");
        } else {
            document.getElementById(id).innerHTML = "X";
            document.getElementById("message").innerHTML = "Choose a box: O turn.";
            verification("X");
        }
        ++sign;
    } else {
        document.getElementById("message").innerHTML = "This box has already been used, Try an unused one.";
    }
}

function verification(s) {
    for (let i = 1, id_line = 1; i <= 3; ++i) {
        for (let j = 1, id_column = i, cntBoxLine = 0, cntBoxColumn = 0; j <= 3; ++j, ++id_line, id_column += 3) {
            if (document.getElementById(id_line).innerHTML == s) {
                ++cntBoxLine;
            }
            if (document.getElementById(id_column).innerHTML == s) {
                ++cntBoxColumn;
            }
            if (cntBoxLine == 3 || cntBoxColumn == 3) {
                endGame(s + " Win the game.");
            }
        }
    }
    for (let i = 1, id_mainDiagonal = 1, id_secondaryDiagonal = 3, cntBoxMain = 0, cntBoxSecondary = 0; i <= 3; ++i, id_mainDiagonal += 4, id_secondaryDiagonal += 2) {
        if (document.getElementById(id_mainDiagonal).innerHTML == s) {
            ++cntBoxMain;
        }
        if (document.getElementById(id_secondaryDiagonal).innerHTML == s) {
            ++cntBoxSecondary;
        }
        if (cntBoxMain == 3 || cntBoxSecondary == 3) {
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