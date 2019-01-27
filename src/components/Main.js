import React, { Component } from 'react';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer Me! 🍻" />
            </div>
        )
    }
};

export default Main;