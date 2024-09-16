const topLeft = document.getElementById('top-left');
const topCenter = document.getElementById('top-center');
const topRight = document.getElementById('top-right');
const middleLeft = document.getElementById('middle-left');
const middleCenter = document.getElementById('middle-center');
const middleRight = document.getElementById('middle-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomCenter = document.getElementById('bottom-center');
const bottomRight = document.getElementById('bottom-right');

const gameBoard = new Map();
gameBoard.set('topLeftBoard', "");
gameBoard.set('topCenterBoard', "");
gameBoard.set('topRightBoard', "");
gameBoard.set('middleLeftBoard', "");
gameBoard.set('middleCenterBoard', "");
gameBoard.set('middleRightBoard', "");
gameBoard.set('bottomLeftBoard', "");
gameBoard.set('bottomCenterBoard', "");
gameBoard.set('bottomRightBoard', "");

const startGameButton = document.getElementById('start-game-button');
const playerGamePiece = "x";
let gameActive = true;
let myTurn = true;

startGameButton.style.display = "none";


topLeft.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        topLeft.classList.add(playerGamePiece)
        gameBoard.set('topLeftBoard', "x");
        checkForWin();
    }
});
topCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        topCenter.classList.add(playerGamePiece)
        gameBoard.set('topCenterBoard', "x");
        checkForWin();
    }
});
topRight.addEventListener("click", () => {
        if(gameActive == true && myTurn == true) {
        topRight.classList.add(playerGamePiece)
        gameBoard.set('topRightBoard', "x");
        checkForWin();
    }
});
middleLeft.addEventListener("click", () => {
        if(gameActive == true && myTurn == true) {
        middleLeft.classList.add(playerGamePiece)
        gameBoard.set('middleLeftBoard', "x");
        checkForWin();
    }
});
middleCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        middleCenter.classList.add(playerGamePiece)
        gameBoard.set('middleCenterBoard', "x");
        checkForWin();
    }
});
middleRight.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        middleRight.classList.add(playerGamePiece)
        gameBoard.set('middleRightBoard', "x");
        checkForWin();
    }
});
bottomLeft.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        bottomLeft.classList.add(playerGamePiece)
        gameBoard.set('bottomLeftBoard', "x");
        checkForWin();
    }
});
bottomCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        bottomCenter.classList.add(playerGamePiece)
        gameBoard.set('bottomCenterBoard', "x");
        checkForWin();
    }
});
bottomRight.addEventListener("click", () => {
    if(gameActive == true && myTurn == true) {
        bottomRight.classList.add(playerGamePiece)
        gameBoard.set('bottomRightBoard', "x");
        checkForWin();
    }
});

startGameButton.addEventListener('click', () => startGame());

function startGame() {
    topLeft.classList.remove(playerGamePiece);
    topCenter.classList.remove(playerGamePiece);
    topRight.classList.remove(playerGamePiece);
    middleLeft.classList.remove(playerGamePiece);
    middleCenter.classList.remove(playerGamePiece);
    middleRight.classList.remove(playerGamePiece);
    bottomLeft.classList.remove(playerGamePiece);
    bottomCenter.classList.remove(playerGamePiece);
    bottomRight.classList.remove(playerGamePiece);

    gameBoard.set('topLeftBoard', "");
    gameBoard.set('topCenterBoard', "");
    gameBoard.set('topRightBoard', "");
    gameBoard.set('middleLeftBoard', "");
    gameBoard.set('middleCenterBoard', "");
    gameBoard.set('middleRightBoard', "");
    gameBoard.set('bottomLeftBoard', "");
    gameBoard.set('bottomCenterBoard', "");
    gameBoard.set('bottomRightBoard', "");

    gameActive = true;
}

function gameOver() {
    gameActive = false;
    startGameButton.style.display = "";
}

function checkForWin() {
    
    for(const [key, value] of gameBoard) {
        console.log(`${key}, ${value}`);
    }

    // Check top row
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('topRightBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('topCenterBoard') == playerGamePiece 
    && gameBoard.get('topRightBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check middle row
    if(gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('middleRightBoard') != ""
    && gameBoard.get('middleLeftBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('middleRightBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check bottom row
    if(gameBoard.get('bottomLeftBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('bottomLeftBoard') == playerGamePiece 
    && gameBoard.get('bottomCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check left column
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('middleLeftBoard') == playerGamePiece 
    && gameBoard.get('bottomLeftBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check center column
    if(gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != ""
    && gameBoard.get('topCenterBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomCenterBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check right column
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleRightBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topRightBoard') == playerGamePiece 
    && gameBoard.get('middleRightBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check diagonally top left to bottom right
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }

    // Check diagonally top right to bottom left
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topRightBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomLeftBoard') == playerGamePiece) {
        console.log(playerGamePiece + " won!");
        gameOver();
    }
}