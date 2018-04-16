import React from 'react';
import {connect} from 'react-redux';

import { restart, info } from '../actions';

import './top-nav.css';

export function TopNav(props) {
    console.log(props)
    console.log('topNav connected')
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={(event) => 
                        props.dispatch.info(event)} 
                        className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={(event) => {
                        console.log('clicked')
                        props.newGame(event)
                    }} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}


export default connect()(TopNav);
