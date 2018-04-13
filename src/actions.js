//list user action: make a guess, restart, click for info

const MAKE_GUESS = 'MAKE_GUESS'
export const make_guess = (guess) => ({
    type: MAKE_GUESS,
    guess
})

const RESTART = 'RESTART'
export const restart = () => ({
  type: RESTART
})

const GET_INFO = 'GET_INFO'
export const info = () => ({
  type: INFO
})