import {MAKE_GUESS, RESTART, GET_INFO} from './actions'

const initialState = {
  guesses: [],
  answer: Math.floor((Math.random() * 100) + 1),
  feedback: 'Make your guess!',
  displayInfo: false
};

const gameReducer = (state = initialState, action) => {

return state

}

export default gameReducer