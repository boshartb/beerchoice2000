import React, { Component } from 'react';

import Results from "./Results";
import Search from "./Search";
import Header from "./Header";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            numBeers: 10,
            beers: []
        }
    }

    incrementBeers = () => {
        // create a new upated state variable
        const beerAmount = this.state.numBeers + 1;
        // set state to that amount
        this.setState({ numBeers: beerAmount });
    };

    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer Me! 🍻" />
                <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>

                <Search />
                <Results />
            </div>
        )
    }
}

export default Main;