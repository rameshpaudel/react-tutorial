import React, { Component } from "react";

class ReqRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        };
    }

    componentDidMount() {
        this.apiRequest();
    }

    apiRequest() {
        fetch("https://reqres.in/api/unknown")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    result: json.data
                });
            })
            .catch(error => console.warn("error", error));
    }

    render() {
        return (
            <div>
                {this.state.result.map((data, index) => {
                    return (
                        <div
                            style={{
                                backgroundColor: data.color,
                                padding: "10px"
                            }}
                        >
                            <h1>{data.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ReqRes;
