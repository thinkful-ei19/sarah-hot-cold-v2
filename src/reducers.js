import {MAKE_GUESS, RESTART, TOGGLE_INFO} from './actions'

const initialState = {
  guesses: [],
  answer: Math.floor((Math.random() * 100) + 1),
  feedback: 'Make your guess!',
  count: 0,
  displayInfo: false
};

const gameReducer = (state = initialState, action) => {
  if(action.type === MAKE_GUESS) {

    let guess, feedback;
    guess = parseInt(action.guess, 10);
    console.log(typeof(action.guess))
    if (isNaN(guess)) {
      feedback = 'Guess must be a number';

      return Object.assign({}, state, {
        feedback
      })
    }

    

    const difference = Math.abs(guess - state.answer);

    if (difference >= 60) {
        feedback = 'Ice cold';
    } else if (difference >= 30) {
        feedback = 'Cold';
    } else if (difference >= 10) {
        feedback = 'Warm';
    } else if (difference >= 5) {
        feedback = 'Hot';
    } else if (difference >= 1) {
        feedback = 'On fire!!';
    } else {
        feedback = 'You guessed it!!! Click NEW GAME to play again';
    }

     return Object.assign({}, state, {
       guesses: [...state.guesses, guess],
       feedback: feedback
     })
  }

  else if(action.type === RESTART) {
    return Object.assign({}, state, {
      guesses: [],
      answer: Math.floor((Math.random() * 100) + 1),
      feedback: 'Make your guess!',
      displayInfo: false
    })
  }

  else if(action.type === TOGGLE_INFO) {
    console.log(state.displayInfo)
    return Object.assign({}, state,  {
      
      displayInfo: !state.displayInfo
    })
  }
return state

}

export default gameReducer