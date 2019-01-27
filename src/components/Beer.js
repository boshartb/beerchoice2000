import React, { Component } from "react"
import slug from 'slugify';
import { Link } from 'react-router-dom';

class Beer extends Component {
    render() {
        const { name, labels, id } = this.props.details;
        const image = labels ? labels.medium : 'notfound.jpg';

        return (
            <div className="beer">
                <Link to={`/beer/${id}/${slug(name)}`}>
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                </Link>
            </div>
        );
    }
}
export default Beer;