const statusDisplay = document.querySelector('.game-notification'),
    gameState = ["", "", "", "", "", "", "", "", ""],
    winnings = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    winMessage = () => `Player ${currentPlayer} has won!`,
    drawMessage = () => `The game is over in a draw!`,
    currentPlayerTurn = () => `Player ${currentPlayer} 's turn`


let gameActive = true;
    currentPlayer = "O" //math.random para al azar


function main() {
    handleStatusDisplay(currentPlayerTurn())
    listeners()
}

main()

function handleStatusDisplay(message) {
    statusDisplay.innerHTML = message
}

function listeners() {
    document.querySelector('.tic-container').addEventListener('click', handleCellClick);
    document.querySelector('.game-restart').addEventListener('click', handleRestartGame);
}

function handleCellClick(clickedEvent) {
    const clickedCell = clickedEvent.target;
    if (clickedCell.classList.contains('game-cell')) {
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell);
        console.log(clickedCellIndex)
        if (gameState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex)
        handleResultValidation()
    }
    console.log(clickedCell)
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = 'O';
    restartGameState()
    handleStatusDisplay(currentPlayerTurn())
    document.querySelectorAll('.game-cell').forEach(cell => cell.innerText = '')
}

function restartGameState() {
    let i = gameState.length
    while(i--) {
        gameState[i] = ''
    }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winnings.length; i++) {
        const winCondition = winnings[i];
        let position1 = gameState[winCondition[0]],
            position2 = gameState[winCondition[1]],
            position3 = gameState[winCondition[2]]
        if (position1 === '' || position2 === '' || position3 === '') {
            continue;
        }
        if (position1 === position2 && position2 === position3) {
            roundWon  = true;
            break;
        }
    }

    if (roundWon) {
        handleStatusDisplay(winMessage())
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('')

    if (roundDraw) {
        handleStatusDisplay(drawMessage())
        gameActive = false;
        return;
    }

    handlePlayerChange()
}

function handlePlayerChange() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    handleStatusDisplay(currentPlayerTurn())
}