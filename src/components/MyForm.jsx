import React, { Component } from "react";
import FAQ from "./FAQ";
import Card from "./Card";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    }

    onChangeDesc(event) {
        //Getting the form data
        const value = event.target.value;
        this.setState({
            description: value
        });
    }

    onChangeInput(event) {
        const value = event.target.value;
        this.setState({
            title: value
        });
    }
    render() {
        return (
            <div className="dark">
                <div className="half">
                    <FAQ
                        title={this.state.title}
                        description={this.state.description}
                    />
                    <br />
                </div>
                <div className="half">
                    <Card
                        title={this.state.title}
                        description={this.state.description}
                    />
                </div>
                <div className="container">
                    <input
                        type="text"
                        placeholder="Title Here"
                        onChange={this.onChangeInput.bind(this)}
                    />
                    <textarea
                        onChange={this.onChangeDesc.bind(this)}
                        placeholder="Description goes here"
                    />
                </div>
            </div>
        );
    }
}

export default MyForm;
