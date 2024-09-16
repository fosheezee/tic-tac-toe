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
const opponentGamePiece = "o";
let gameActive = true;
let myTurn = true;

startGameButton.style.display = "none";


topLeft.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('topLeft')) {
        topLeft.classList.add(playerGamePiece);
        gameBoard.set('topLeftBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
topCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('topCenter')) {
        topCenter.classList.add(playerGamePiece);
        gameBoard.set('topCenterBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
topRight.addEventListener("click", () => {
        if(gameActive == true && myTurn == true && getAvailableSpots().includes('topRight')) {
        topRight.classList.add(playerGamePiece);
        gameBoard.set('topRightBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
middleLeft.addEventListener("click", () => {
        if(gameActive == true && myTurn == true && getAvailableSpots().includes('middleLeft')) {
        middleLeft.classList.add(playerGamePiece);
        gameBoard.set('middleLeftBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
middleCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('middleCenter')) {
        middleCenter.classList.add(playerGamePiece);
        gameBoard.set('middleCenterBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
middleRight.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('middleRight')) {
        middleRight.classList.add(playerGamePiece);
        gameBoard.set('middleRightBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
bottomLeft.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('bottomLeft')) {
        bottomLeft.classList.add(playerGamePiece);
        gameBoard.set('bottomLeftBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
bottomCenter.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('bottomCenter')) {
        bottomCenter.classList.add(playerGamePiece);
        gameBoard.set('bottomCenterBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
    }
});
bottomRight.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('bottomRight')) {
        bottomRight.classList.add(playerGamePiece);
        gameBoard.set('bottomRightBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
        }
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

    topLeft.classList.remove(opponentGamePiece);
    topCenter.classList.remove(opponentGamePiece);
    topRight.classList.remove(opponentGamePiece);
    middleLeft.classList.remove(opponentGamePiece);
    middleCenter.classList.remove(opponentGamePiece);
    middleRight.classList.remove(opponentGamePiece);
    bottomLeft.classList.remove(opponentGamePiece);
    bottomCenter.classList.remove(opponentGamePiece);
    bottomRight.classList.remove(opponentGamePiece);

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
    myTurn = true;
    startGameButton.style.display = "none";
}

function gameOver() {
    gameActive = false;
    myTurn = false;
    startGameButton.style.display = "";
}

function checkForWin() {
    
    // for(const [key, value] of gameBoard) {
    //     console.log(`${key}, ${value}`);
    // }

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

function checkForLoss() {
    
    // for(const [key, value] of gameBoard) {
    //     console.log(`${key}, ${value}`);
    // }

    // Check top row
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('topRightBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('topCenterBoard') == opponentGamePiece 
    && gameBoard.get('topRightBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check middle row
    if(gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('middleRightBoard') != ""
    && gameBoard.get('middleLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('middleRightBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check bottom row
    if(gameBoard.get('bottomLeftBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece 
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check left column
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleLeftBoard') == opponentGamePiece 
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check center column
    if(gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != ""
    && gameBoard.get('topCenterBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check right column
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleRightBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topRightBoard') == opponentGamePiece 
    && gameBoard.get('middleRightBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check diagonally top left to bottom right
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }

    // Check diagonally top right to bottom left
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topRightBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece) {
        console.log(opponentGamePiece + " won!");
        gameOver();
    }
}

function checkForTie() {
    if(getAvailableSpots().length == 0) {
        console.log('You tied!');
        gameOver();
    }
}

function opponentsTurn() {
    myTurn = false;

    opponentsChoice = chooseAvailableSpot();
    // console.log(opponentsChoice);

    if(opponentsChoice == "topLeft") {
        topLeft.classList.add(opponentGamePiece);
        gameBoard.set('topLeftBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "topCenter") {
        topCenter.classList.add(opponentGamePiece);
        gameBoard.set('topCenterBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "topRight") {
        topRight.classList.add(opponentGamePiece);
        gameBoard.set('topRightBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "middleLeft") {
        middleLeft.classList.add(opponentGamePiece);
        gameBoard.set('middleLeftBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "middleCenter") {
        middleCenter.classList.add(opponentGamePiece);
        gameBoard.set('middleCenterBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "middleRight") {
        middleRight.classList.add(opponentGamePiece);
        gameBoard.set('middleRightBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "bottomLeft") {
        bottomLeft.classList.add(opponentGamePiece);
        gameBoard.set('bottomLeftBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "bottomCenter") {
        bottomCenter.classList.add(opponentGamePiece);
        gameBoard.set('bottomCenterBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
    if(opponentsChoice == "bottomRight") {
        bottomRight.classList.add(opponentGamePiece);
        gameBoard.set('bottomRightBoard', opponentGamePiece);
        checkForLoss();
        checkForTie();
        
        if(gameActive == true) {
            myTurn = true;
        }
    }
}

function getAvailableSpots() {
    let availableGameBoard = [];

    if(gameBoard.get('topLeftBoard') == "") {
        availableGameBoard.push('topLeft');
    }
    if(gameBoard.get('topCenterBoard') == "") {
        availableGameBoard.push('topCenter');
    }
    if(gameBoard.get('topRightBoard') == "") {
        availableGameBoard.push('topRight');
    }
    if(gameBoard.get('middleLeftBoard') == "") {
        availableGameBoard.push('middleLeft');
    }
    if(gameBoard.get('middleCenterBoard') == "") {
        availableGameBoard.push('middleCenter');
    }
    if(gameBoard.get('middleRightBoard') == "") {
        availableGameBoard.push('middleRight');
    }
    if(gameBoard.get('bottomLeftBoard') == "") {
        availableGameBoard.push('bottomLeft');
    }
    if(gameBoard.get('bottomCenterBoard') == "") {
        availableGameBoard.push('bottomCenter');
    }
    if(gameBoard.get('bottomRightBoard') == "") {
        availableGameBoard.push('bottomRight');
    }

    // console.log(availableGameBoard);

    return availableGameBoard;
}

function chooseAvailableSpot() {
    
    let available = getAvailableSpots();

    const random = Math.floor(Math.random() * available.length);
    
    return available[random];
}