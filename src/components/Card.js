import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.image || "http://lorempixel.com/200/200/technology/Test/"}
                    alt=""
                />
                <h1>{this.props.title || `This is a card`}</h1>
                <p className="container">
                    {this.props.description ||
                        `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, exercitationem?`}
                </p>
                <button onClick={this.onClickHandler}>Click Here</button>
            </div>
        );
    }
}

export default Card;
