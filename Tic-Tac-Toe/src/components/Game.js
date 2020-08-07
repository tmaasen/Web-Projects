import React from 'react'
import Board from './Board'

export class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            stepNumber: 0,
            player1: 'Player 1',
            player2: 'Player 2'
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice(); // slice creates a copy of the array to modify the copy
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            winningPattern:[]
        });
    }

    resetBoard() {
        this.setState({ history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0, winningPattern:[] })
    }

    checkIfBoardIsFull() {
        const history = this.state.history;
        let fullBoard = false;
        for (let n = 0; n < history.length; n++) {
            if (history.length !== 10) {
                fullBoard = false;
                return fullBoard
            }
        }
        fullBoard = true;
        return fullBoard;
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner!!! ' + (!this.state.xIsNext ? this.state.player1 : this.state.player2);
        } else {
            if (this.checkIfBoardIsFull() === false) {
                status = 'Next player: ' + (this.state.xIsNext ? this.state.player1 : this.state.player2); // figure out ternary operator
            } else {
                status = "It's a Draw!"
            }
        }
        return (
            <div>                
                <div style={{padding:'10px'}}>
                    <span>Player 1:&nbsp;<input id="p1" placeholder="Player 1's name" onChange={event => this.setState({player1:event.target.value})}></input></span>
                    &nbsp;&nbsp;&nbsp;
                    <span>Player 2:&nbsp;<input id="p2" placeholder="Player 2's name" onChange={event => this.setState({player2:event.target.value})}></input></span>
                    &nbsp;&nbsp;&nbsp;
                </div>
                <div style={{ display: 'flex' }}>
                    <title>Tanner's Tic-Tac-Toe</title>
                    <div className="game">
                        <div className="game-board">
                            <Board 
                                player1={this.state.player1} 
                                player2={this.state.player2} 
                                squares={current.squares} 
                                onClick={(i) => this.handleClick(i)}                                
                            />
                        </div>
                    </div>
                    <div className="game-info">
                        {/* if (winner) show button and status
                        else if (board is full) show button and status
                        else show status */}
                        {winner || this.checkIfBoardIsFull() === true
                            ? (<span>{status}<button className="resetButton" onClick={() => this.resetBoard()}>New Game</button></span>)
                            : (<span>{status}</span>)}
                        <ol>{moves}</ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game

function calculateWinner(squares) {
    // possible winning combos
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let n = 0; n < lines.length; n++) {
        const [a, b, c] = lines[n];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            if (squares[a] === 'X') {
                // this.setState({winningPattern:lines[n]})
                return 'Player 1';
            } else {
                return 'Player 2';
            }
        }
    }
    return null; // no winner yet
}
