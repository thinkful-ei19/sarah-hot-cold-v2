import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

import './guess-section.css';

export function GuessSection(props) {
    console.log('guessSection:', props);
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
        </section>
    );
}
function mapStateToProps(state) {
    return {
        feedback: state.feedback
    }
}
export default connect(mapStateToProps)(GuessSection);

