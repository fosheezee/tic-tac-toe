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

const lastGameResult = document.getElementById('last-game-result');
const startGameButton = document.getElementById('start-game-button');
const difficultyContainer = document.getElementById('difficulty-container');
const difficultySelect = document.getElementById('difficulty-select');
difficultySelect.value = "hard";
const playerGamePiece = "x";
const opponentGamePiece = "o";
let gameDifficulty = "hard";
let gameActive = true;
let myTurn = true;
let gameResult = "";

lastGameResult.style.display = "none";
startGameButton.style.display = "none";

// topLeft.addEventListener("click", makePlayerMove('topLeft'));
topLeft.addEventListener("click", () => {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes('topLeft')) {
        topLeft.classList.add(playerGamePiece);
        gameBoard.set('topLeftBoard', "x");
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
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
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
        }
    }
});

startGameButton.addEventListener('click', () => startGame());
difficultySelect.addEventListener('change', () => gameDifficulty = difficultySelect.value);

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

    winningSpot = "";
    losingSpot = "";

    gameActive = true;
    myTurn = true;
    
    lastGameResult.style.display = "none";
    startGameButton.style.display = "none";
    difficultyContainer.style.display = "none";
}

function gameOver(result) {
    gameActive = false;
    myTurn = false;
    if(result == "won") {lastGameResult.innerHTML = "You won!"}
    if(result == "lost") {lastGameResult.innerHTML = "You lost!"}
    if(result == "tied") {lastGameResult.innerHTML = "You tied!"}
    lastGameResult.style.display = "";
    startGameButton.style.display = "";
    difficultyContainer.style.display = "";
}

function makePlayerMove(gameBoardPosition) {
    if(gameActive == true && myTurn == true && getAvailableSpots().includes(gameBoardPosition)) {
        if(gameBoardPosition == 'topLeft') () => topLeft.classList.add(playerGamePiece);
        gameBoard.set(gameBoardPosition + 'Board', playerGamePiece);
        checkForWin();
        checkForTie();
        
        if(gameActive == true) {
            opponentsTurn();
            if(gameActive == true) {
                lastGameResult.style.display = "none";
                difficultyContainer.style.display = "none";
            }
        }
    }
}

function checkForWin() {

    // Check top row
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('topRightBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('topCenterBoard') == playerGamePiece 
    && gameBoard.get('topRightBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check middle row
    if(gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('middleRightBoard') != ""
    && gameBoard.get('middleLeftBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('middleRightBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check bottom row
    if(gameBoard.get('bottomLeftBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('bottomLeftBoard') == playerGamePiece 
    && gameBoard.get('bottomCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check left column
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('middleLeftBoard') == playerGamePiece 
    && gameBoard.get('bottomLeftBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check center column
    if(gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != ""
    && gameBoard.get('topCenterBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomCenterBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check right column
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleRightBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topRightBoard') == playerGamePiece 
    && gameBoard.get('middleRightBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check diagonally top left to bottom right
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topLeftBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomRightBoard') == playerGamePiece) {
        gameOver("won");
    }

    // Check diagonally top right to bottom left
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topRightBoard') == playerGamePiece 
    && gameBoard.get('middleCenterBoard') == playerGamePiece 
    && gameBoard.get('bottomLeftBoard') == playerGamePiece) {
        gameOver("won");
    }
}

function checkForLoss() {

    // Check top row
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('topRightBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('topCenterBoard') == opponentGamePiece 
    && gameBoard.get('topRightBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check middle row
    if(gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('middleRightBoard') != ""
    && gameBoard.get('middleLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('middleRightBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check bottom row
    if(gameBoard.get('bottomLeftBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece 
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check left column
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleLeftBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleLeftBoard') == opponentGamePiece 
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check center column
    if(gameBoard.get('topCenterBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomCenterBoard') != ""
    && gameBoard.get('topCenterBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check right column
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleRightBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topRightBoard') == opponentGamePiece 
    && gameBoard.get('middleRightBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check diagonally top left to bottom right
    if(gameBoard.get('topLeftBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomRightBoard') != ""
    && gameBoard.get('topLeftBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomRightBoard') == opponentGamePiece) {
        gameOver("lost");
    }

    // Check diagonally top right to bottom left
    if(gameBoard.get('topRightBoard') != "" 
    && gameBoard.get('middleCenterBoard') != "" 
    && gameBoard.get('bottomLeftBoard') != ""
    && gameBoard.get('topRightBoard') == opponentGamePiece 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece 
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece) {
        gameOver("lost");
    }
}

function checkForTie() {
    if(getAvailableSpots().length == 0) {
        gameOver("tied");
    }
}

function opponentsTurn() {
    myTurn = false;

    opponentsChoice = chooseAvailableSpot(gameDifficulty);

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

    return availableGameBoard;
}

function chooseAvailableSpot(difficulty) {
    
    if(difficulty == "easy") {
        return makeRandomMove();
    }
    if(difficulty == "medium") {
        return makeBetterMove();
    }
    if(difficulty == "hard") {
        return makeBestMove();
    }
}

function makeRandomMove() {
    let available = getAvailableSpots();

        const random = Math.floor(Math.random() * available.length);
        
        return available[random];
}

function makeBetterMove() {
    if(canIWin() != "") {
        return canIWin();
    }
    if(canILose() != "") {
        return canILose();
    }
    else {
        return makeRandomMove();
    }
}

function makeBestMove() {
    if(canIWin() != "") {
        return canIWin();
    }
    if(canILose() != "") {
        return canILose();
    }
    else {
        return makeRandomMove();
    }
}

function canIWin() {

    let winningSpot = "";

    // Check top left
    if((gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('topCenterBoard') == opponentGamePiece
    && gameBoard.get('topRightBoard') == opponentGamePiece)
    || (gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('middleLeftBoard') == opponentGamePiece
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece)
    || (gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)) {
        winningSpot = "topLeft";
    }
    // Check top center
    if((gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('topCenterBoard') == ""
    && gameBoard.get('topRightBoard') == opponentGamePiece)
    || (gameBoard.get('topCenterBoard') == ""
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece)) {
        winningSpot = "topCenter";
    }
    // Check top right
    if((gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('topCenterBoard') == opponentGamePiece
    && gameBoard.get('topRightBoard') == "")
    || (gameBoard.get('topRightBoard') == ""
    && gameBoard.get('middleRightBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)
    || (gameBoard.get('topRightBoard') == ""
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece)) {
        winningSpot = "topRight";
    }
    // Check middle left
    if((gameBoard.get('middleLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('middleRightBoard') == opponentGamePiece)
    || (gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('middleLeftBoard') == ""
    && gameBoard.get('bottomLeftBoard') == opponentGamePiece)) {
        winningSpot = "middleLeft";
    }
    // Check middle center
    if((gameBoard.get('middleLeftBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('middleRightBoard') == opponentGamePiece)
    || (gameBoard.get('topCenterBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece)
    || (gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)
    || (gameBoard.get('topRightBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)) {
        winningSpot = "middleCenter";
    }
    // Check middle right
    if((gameBoard.get('middleLeftBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('middleRightBoard') == "")
    || (gameBoard.get('topRightBoard') == opponentGamePiece
    && gameBoard.get('middleRightBoard') == ""
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)) {
        winningSpot = "middleRight";
    }
    // Check bottom left
    if((gameBoard.get('bottomLeftBoard') == "" 
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)
    || (gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('middleLeftBoard') == opponentGamePiece
    && gameBoard.get('bottomLeftBoard') == "")
    || (gameBoard.get('bottomLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('topRightBoard') == opponentGamePiece)) {
        winningSpot = "bottomLeft";
    }
    // Check bottom center
    if((gameBoard.get('bottomLeftBoard') == opponentGamePiece
    && gameBoard.get('bottomCenterBoard') == ""
    && gameBoard.get('bottomRightBoard') == opponentGamePiece)
    || (gameBoard.get('topCenterBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomCenterBoard') == "")) {
        winningSpot = "bottomCenter";
    }
    // Check bottom right
    if((gameBoard.get('bottomLeftBoard') == opponentGamePiece
    && gameBoard.get('bottomCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == "")
    || (gameBoard.get('topRightBoard') == opponentGamePiece
    && gameBoard.get('middleRightBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == "")
    || (gameBoard.get('topLeftBoard') == opponentGamePiece
    && gameBoard.get('middleCenterBoard') == opponentGamePiece
    && gameBoard.get('bottomRightBoard') == "")) {
        winningSpot = "bottomRight";
    }

    return winningSpot;
    
}

function canILose() {

    let losingSpot = "";

    // Check top left
    if((gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('topCenterBoard') == playerGamePiece
    && gameBoard.get('topRightBoard') == playerGamePiece)
    || (gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('middleLeftBoard') == playerGamePiece
    && gameBoard.get('bottomLeftBoard') == playerGamePiece)
    || (gameBoard.get('topLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == playerGamePiece)) {
        losingSpot = "topLeft";
    }
    // Check top center
    if((gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('topCenterBoard') == ""
    && gameBoard.get('topRightBoard') == playerGamePiece)
    || (gameBoard.get('topCenterBoard') == ""
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('bottomCenterBoard') == playerGamePiece)) {
        losingSpot = "topCenter";
    }
    // Check top right
    if((gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('topCenterBoard') == playerGamePiece
    && gameBoard.get('topRightBoard') == "")
    || (gameBoard.get('topRightBoard') == ""
    && gameBoard.get('middleRightBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == playerGamePiece)
    || (gameBoard.get('topRightBoard') == ""
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('bottomLeftBoard') == playerGamePiece)) {
        losingSpot = "topRight";
    }
    // Check middle left
    if((gameBoard.get('middleLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('middleRightBoard') == playerGamePiece)
    || (gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('middleLeftBoard') == ""
    && gameBoard.get('bottomLeftBoard') == playerGamePiece)) {
        losingSpot = "middleLeft";
    }
    // Check middle center
    if((gameBoard.get('middleLeftBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('middleRightBoard') == playerGamePiece)
    || (gameBoard.get('topCenterBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomCenterBoard') == playerGamePiece)
    || (gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomRightBoard') == playerGamePiece)
    || (gameBoard.get('topRightBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == ""
    && gameBoard.get('bottomLeftBoard') == playerGamePiece)) {
        losingSpot = "middleCenter";
    }
    // Check middle right
    if((gameBoard.get('middleLeftBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('middleRightBoard') == "")
    || (gameBoard.get('topRightBoard') == playerGamePiece
    && gameBoard.get('middleRightBoard') == ""
    && gameBoard.get('bottomRightBoard') == playerGamePiece)) {
        losingSpot = "middleRight";
    }
    // Check bottom left
    if((gameBoard.get('bottomLeftBoard') == "" 
    && gameBoard.get('bottomCenterBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == playerGamePiece)
    || (gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('middleLeftBoard') == playerGamePiece
    && gameBoard.get('bottomLeftBoard') == "")
    || (gameBoard.get('bottomLeftBoard') == "" 
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('topRightBoard') == playerGamePiece)) {
        losingSpot = "bottomLeft";
    }
    // Check bottom center
    if((gameBoard.get('bottomLeftBoard') == playerGamePiece
    && gameBoard.get('bottomCenterBoard') == ""
    && gameBoard.get('bottomRightBoard') == playerGamePiece)
    || (gameBoard.get('topCenterBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('bottomCenterBoard') == "")) {
        losingSpot = "bottomCenter";
    }
    // Check bottom right
    if((gameBoard.get('bottomLeftBoard') == playerGamePiece
    && gameBoard.get('bottomCenterBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == "")
    || (gameBoard.get('topRightBoard') == playerGamePiece
    && gameBoard.get('middleRightBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == "")
    || (gameBoard.get('topLeftBoard') == playerGamePiece
    && gameBoard.get('middleCenterBoard') == playerGamePiece
    && gameBoard.get('bottomRightBoard') == "")) {
        losingSpot = "bottomRight";
    }

    return losingSpot;
}