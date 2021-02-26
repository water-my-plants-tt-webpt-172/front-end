import React, { Component } from 'react';



class plantCard extends Component {

    render() {

        return (
            <div>
                <h2>{this.props.nickname.toUpperCase()}</h2>
                <div>
                    <button>Water Me!</button>
                    <p>X days</p>
                    <p>{this.props.species}</p>
                </div>

            </div>
        );
    }
}

export default plantCard;