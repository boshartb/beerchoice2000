import React, { Component } from "react"
import Beer from "./Beer";
import Loader from './Loader';

class Results extends Component {
    render() {
        if (this.props.loading) {
            return <Loader message="🍻 Beer run!" />
        }

        return (
            <div className="results">
                <div className="beers">
                    {this.props.beers.map(details => <Beer details={details} key={details.id} />)}
                </div>
            </div>
        )
    }
}
export default Results;