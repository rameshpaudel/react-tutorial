import React, { Component } from "react";

class BudgetForm extends Component {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.priceRef = React.createRef();
        this.state = {
            title: "",
            price: 0,
            createdAt: Date()
        };
    }


    clearFields() {
        this.setState({
            title: '',
            price: 0
        })
    }

    onTitleChangeHandler(event) {
        this.setState({
            title: event.target.value
        });
    }

    submitFormHandler() {
        //We pass the data to the parent
        this.props.onSubmit(this.state, this.titleRef, this.priceRef);
        this.clearFields();
    }

    onPriceChangeHandler(event) {
        
        let price = (!isNaN(event.target.value)) ? Number(event.target.value) : 0;
        this.setState({
            price: price
        });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.titleRef}
                    placeholder="Input title"
                    onChange={this.onTitleChangeHandler.bind(this)}
                />
                <input
                    type="number"
                    placeholder="Input price"
                    ref={this.priceRef}
                    onChange={this.onPriceChangeHandler.bind(this)}
                />
                <button onClick={this.submitFormHandler.bind(this)}>
                    Submit
                </button>
            </div>
        );
    }
}

export default BudgetForm;
