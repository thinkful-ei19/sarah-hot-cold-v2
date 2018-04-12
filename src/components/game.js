import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            answer: Math.floor((Math.random() * 100) + 1),
            feedback: 'Make your guess!'
        }
        console.log(this.state.answer)
    }

    

    makeGuess(number) {
        const difference = Math.abs(number - this.state.answer);
        console.log(difference);

        let feedback;
        if (difference > 60) {
            feedback = 'Ice cold';
        } else if (difference > 30) {
            feedback = 'Cold'
        } else if (difference > 10) {
            feedback = 'Warm'
        } else if (difference > 5) {
            feedback = 'Hot'
        } else if (difference > 1) {
            feedback = 'On fire!!'
        } else {
            feedback = 'You guessed it!!! Click NEW GAME to play again'
        }

        this.setState({
            guesses: [...this.state.guesses, number],
            feedback
        });
    }

    render() {
    return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback} add={(value) => this.makeGuess(value)} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }
}

export default Game

