
class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.winner = null;
        this.moves = 0;
    }

    // Method to make a move on the board
    makeMove(index) {
        if (this.board[index] === '' && !this.winner) {
            this.board[index] = this.currentPlayer;
            this.moves++;


            if (this.checkWinner()) {
                this.winner = this.currentPlayer;
            } else if (this.moves === 9) {
                this.winner = 'Draw';
                alert("Match Draw");
            }
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateBoard();
        }
    }

    checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        // Iterate through each winning combination
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            // Check if the marks in the cells of the combination are all the same
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                alert(`${this.currentPlayer} wins!`);
                return true;
            }
        }

        return false;
    }


    updateBoard() {
        const cells = document.querySelectorAll('.board td');
        cells.forEach((cell, index) => {
            cell.textContent = this.board[index];
        });
    }

    // Method to reset the game
    resetGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.winner = null;
        this.moves = 0;
        this.updateBoard();
    }
}

const game = new TicTacToe();

document.getElementById('board').addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
        const index = parseInt(event.target.id.split('-')[1]);
        game.makeMove(index);
    }
});


// Add event listener for the reset button
document.getElementById('resetButton').addEventListener('click', () => {
    game.resetGame();
});