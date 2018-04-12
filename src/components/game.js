import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: []
        }
    }

    makeGuess(number) {
        this.setState({
            guesses: [...this.state.guesses, number]
        });
    }

    render() {
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" add={(value) => this.makeGuess(value)} />
            <GuessCount count={3} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }
}

export default Game

