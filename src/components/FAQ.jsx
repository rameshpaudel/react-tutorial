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
        const { title, description, click } = this.props;
        const { status } = this.state;
        
        return (
            <div onClick={click} className="faq-container">
                <div className="box faq">
                    <h4>{title} </h4>
                    <button
                        className="right"
                        onClick={this.onClickHandler.bind(this)}
                    >
                        {status ? " - " : " + "}
                    </button>
                </div>
                <p className={status ? "faq-desc" : "hidden"}>{description}</p>
            </div>
        );
    }
}

export default FAQ;
