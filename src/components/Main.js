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

    loadBeers = (searchTerm = 'hops') => {
        // Check for beers in local storage
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
        if (localStorageBeers) {
            const localBeers = JSON.parse(localStorageBeers);
            this.setState({ beers: localBeers, loading: false });
            return; // stop before fetch happens!
        }

        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`).then(data => data.json())
            .then((beers) => {
                console.log(beers);
                // filter for beers with images
                this.state.beers = beers.data.filter(beer => !!beer.labels);
                this.setState({ beers: this.state.beers, loading: false });
                // save to local storage in case we search for this again
                localStorage.setItem(`search-${searchTerm}`, JSON.stringify(this.state.beers));
            })
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.loadBeers();
    }

    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer Me! 🍻" />
                <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>

                <Search />
                <Results beers={this.state.beers} />
            </div>
        )
    }
}

export default Main;