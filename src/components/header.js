import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    //console.log(props)
    return (
        <header>
            <TopNav showInfo={props.show} newGame={props.reset}/>
            
            <h1>HOT or COLD</h1>
        </header>
    );
};
