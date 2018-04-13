//list user action: make a guess, restart, click for info

export const MAKE_GUESS = 'MAKE_GUESS'
export const make_guess = (guess, feedback) => ({
    type: MAKE_GUESS,
    guess,
    feedback
})

export const RESTART = 'RESTART'
export const restart = () => ({
  type: RESTART
})

export const TOGGLE_INFO = 'TOGGLE_INFO'
export const info = () => ({
  type: TOGGLE_INFO
})