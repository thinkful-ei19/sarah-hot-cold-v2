import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            answer: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess!',
            displayInfo: false
        }
        console.log(this.state.answer)
    }

    

    makeGuess(number) {
        const difference = Math.abs(number - this.state.answer);
        console.log(difference);

        let feedback;
        if (difference > 60) {
            feedback = 'Ice cold'
        } else if (difference > 30) {
            feedback = 'Cold'
        } else if (difference > 10) {
            feedback = 'Warm'
        } else if (difference > 5) {
            feedback = 'Hot'
        } else if (difference >= 1) {
            feedback = 'On fire!!'
        } else {
            feedback = 'You guessed it!!! Click NEW GAME to play again'
        }

        this.setState({
            guesses: [...this.state.guesses, number],
            feedback
        });
    }

    showInfo() {
        
        this.setState({
            displayInfo: !this.state.displayInfo
        });
    }

    resetGame() {
        this.setState({
            guesses: [],
            answer: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess!'
        })
    }

    render() {
        console.log(this.state.answer)
    return (
        <div>
            <Header show={(event) => this.showInfo(event)} reset={(event) => this.resetGame(event)} />
            <GuessSection feedback={this.state.feedback} add={(value) => this.makeGuess(value)} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
            {this.state.displayInfo 
                ? <InfoModal 
                    show={(event) => this.showInfo(event)} /> 
                : ''}
        </div>
        );
    }
}

export default Game

