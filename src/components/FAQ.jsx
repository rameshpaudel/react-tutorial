import React, { Component } from "react";

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
    }

    onClickHandler() {
        this.setState({
            status: this.state.status ? false : true
        });
    }
    render() {
        return (
            <div className="faq-container">
                <div className="box faq">
                    <h4>{this.props.title} </h4>
                    <button className="right" onClick={this.onClickHandler.bind(this)}>
                        {this.state.status ? " - " : " + "}

                    </button>
                </div>
                <p className={this.state.status ? "faq-desc" : "hidden"}>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default FAQ;
