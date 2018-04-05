import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    createEmptyState() {
        return {field: [["","",""],
            ["","",""],
            ["","",""]],
            move: 0,
            winner: ""};
    }
    constructor(props) {
        super(props);
        this.state = this.createEmptyState();
    }

    handleClick(rowIndex, cellIndex) {
        let move = this.state.move;
        const currentMark = (move % 2 === 0) ? "x" : "o";

        let winner = this.state.winner;

        const field = this.state.field;
        if(field[rowIndex][cellIndex] === '') {
            field[rowIndex][cellIndex] = currentMark;
            let markCount;

            for(let r = 0; r < 3; r++) {
                markCount = 0;
                for(let c = 0; c < 3; c++) {
                    if (field[r][c] === currentMark) {
                        markCount++;
                    }
                }

                if(markCount === 3) {
                    winner = currentMark;
                    this.setState({
                        winner,
                    })
                }

            }

            for(let c = 0; c < 3; c++) {
                markCount = 0;
                for(let r = 0; r < 3; r++) {
                    if (field[r][c] === currentMark) {
                        markCount++;
                    }
                }
                if(markCount === 3) {
                    winner = currentMark;
                    this.setState({
                        winner,
                    })
                }
            }

            markCount = 0;
            for(let r = 0; r < 3; r++) {

                if (field[r][r] === currentMark) {
                    markCount++;
                }
                if(markCount === 3) {
                    winner = currentMark;
                    this.setState({
                        winner,
                    })
                }
            }

            markCount = 0;
            for(let r = 0; r < 3; r++) {

                if (field[r][2 - r] === currentMark) {
                    markCount++;
                }
                if(markCount === 3) {
                    winner = currentMark;
                    this.setState({
                        winner,
                    })
                }
            }

            this.setState({
                field,
            });

            move++;
            this.setState({
                move,
            });

        }
    }

    handleStartNewGameClick() {
        this.setState(this.createEmptyState());
    }

    render() {
        return (
            <div class="main-content">
                <h1>Tic Tac Toe</h1>
                <table>
                    {this.state.field.map((row, rowIndex) => {
                        return <tr>{row.map((cell, cellIndex) => {
                                return <td onClick={() => {
                                this.handleClick(rowIndex, cellIndex)}
                                }>{cell}</td>;
                               })}</tr>
                    })}
                </table>
                <p>The winner is <span>{this.state.winner}</span></p>
                <button onClick={() => this.handleStartNewGameClick()}>Start new game</button>
            </div>
        );
    }
}

export default App;
