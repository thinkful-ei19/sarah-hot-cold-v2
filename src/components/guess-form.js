import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    //console.log(props)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            let inputValue = event.target.userGuess.value;
            if (inputValue > 100 || inputValue < 0) {
                alert('number must be between 0 and 100')
            }
            
            props.newGuess(inputValue)

            event.target.userGuess.value='';
            event.target.userGuess.focus();
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" 
                // ref={input => this.textInput = input} 
                required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

