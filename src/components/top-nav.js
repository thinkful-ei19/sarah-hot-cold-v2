import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    //console.log(props)

    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={(event) => {
                        
                        {props.showInfo(event)}} 
                    }className="what" href="#">
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

