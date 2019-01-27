import React, { Component } from "react"
import Beer from "./Beer";

class Results extends Component {
    render() {


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