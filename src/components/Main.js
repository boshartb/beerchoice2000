import React, { Component } from 'react';

import Header from './Header';
import Beer from './Beer';


class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer Me! 🍻" />
                <Beer />
            </div>
        )
    }
}

export default Main;