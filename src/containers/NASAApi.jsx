import React, { Component } from "react";

const url =
    "https://api.nasa.gov/planetary/apod?api_key=2K1YXDfAqg9Gcsu5XYt4UUZzvVmcPKZs0813bTHM";
class NASAApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            date: "",
            image: ""
        };
    }

    queryAPI() {
        fetch(url)
            .then(response => {
                //When the response was succesful
                if (response.ok) {
                    //Return json format data
                    return response.json();
                }
            })
            //THis then catches the json response from previous method chained above
            .then(data => {
                console.log("The json data from server", data);
                this.setState({
                    title: data.title, // title is a property of the response object
                    url: data.url,
                    date: data.date,
                    image: data.hdurl
                });
            })
            .catch(error => console.log("Error while making request", error));
    }

    componentDidMount() {
        this.queryAPI();
    }

    render() {
        return (
            <div>
                <h1>NASA API WORKS</h1>
                <h4>{this.state.title}</h4>
                <img className="thumbnail" src={this.state.image} alt="" />
                <p>Date: {this.state.date}</p>
                <a href={this.state.url} target="blank">
                    Click Here
                </a>
            </div>
        );
    }
}

export default NASAApi;
