import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './reset.css';
import './index.css';

import Game from './components/game';

// import {make_guess, restart, info} from './actions'
// import store from './store'

// console.log(store.getState())
// store.dispatch(make_guess(10))
// console.log(store.getState())
// store.dispatch(make_guess(30))
// console.log(store.getState())
// store.dispatch(make_guess('hello'))
// console.log(store.getState())
// store.dispatch(restart())
// console.log(store.getState())
// store.dispatch(info())
// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
