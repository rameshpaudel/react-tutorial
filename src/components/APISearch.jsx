import React, { Component } from "react";
import Card from "./Card";

class ApiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            items: []
        };
    }

    onChangeInput(event) {
        const value = event.target.value;
        this.setState({
            title: value
        });
    }
    handleSearch() {
        fetch(`http://recipepuppy.com/api/?i=${this.state.title}`, {
            contentType: "application/json",
            dataType: "jsonp",
            responseType: "application/json"
        })
            .then(response => response.json())
            .then(data => {
                console.log("RESPONSE FROM SERVER", data);
                if (data.results.length > 0) {
                    this.setState({
                        items: data.results
                    });
                }
            })
            .catch(error =>
                console.log("Error while performing requests", error)
            );
    }
    render() {
        return (
            <div className="dark">
                <input
                    type="text"
                    style={{ padding:"10px", border: "1px solid green" }}
                    placeholder="Ingredient Here"
                    onChange={this.onChangeInput.bind(this)}
                />
                <button onClick={this.handleSearch.bind(this)}>Search</button>
                <div className="rows">
                    {this.state.items.map((value,index)=>{
                        return (<Card key={index} image={value.thumbnail} title={value.title} description={value.ingredients}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default ApiSearch;
