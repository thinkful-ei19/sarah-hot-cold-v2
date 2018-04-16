import React from 'react';
import {connect} from 'react-redux';
import './guess-count.css';


export function GuessCount(props) {
    console.log('gameCount:', props)
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

function mapStateToProps(state) {
    console.log(state.guesses.length);
    return {
        count: state.guesses.length
    }
}

export default connect(mapStateToProps)(GuessCount);
