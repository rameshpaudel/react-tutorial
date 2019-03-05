import React, { Component } from "react";

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Laptop",
            size: "",
            errors: {
                name: true,
                size: true
            }
        };
    }

    validateLength(inputData, errorProp, numOfChars = 9) {
        var errors = { ...this.state.errors };
        if (inputData.length >= numOfChars) {
            // React doesn't allow to set child object
            // So we assign it to a variable and
            // set the state
            errors[errorProp] = false;
            this.setState({ errors });
        } else {
            errors[errorProp] = true;
            this.setState({ errors });
        }
    }

    onChangeName = event => {
        let inputData = event.target.value;
        this.validateLength(inputData, "name", 4);
        this.setState({
            name: inputData
        });
    };

    onChangeSize = event => {
        let inputData = event.target.value;
        this.validateLength(inputData, "size", 2);
        this.setState({
            size: inputData
        });
    };

    render() {
        return (
            <div>
                <label className={this.state.errors.name ? "fail" : "pass"}>
                    Name:
                    <input
                        type="text"
                        defaultValue={this.state.name}
                        onChange={this.onChangeName}
                    />
                </label>

                <label className={this.state.errors.size ? "fail" : "pass"}>
                    Size:
                    <input
                        type="text"
                        defaultValue={this.state.size}
                        onChange={this.onChangeSize}
                    />
                </label>
            </div>
        );
    }
}

export default ProductForm;
