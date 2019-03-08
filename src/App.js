import React, { Component } from "react";
import Banner from "./components/Banner/index";
import CardList from "./components/CardList.js";
import FAQList from "./components/FAQList";
import Input from "./components/Input";
import MyForm from "./components/MyForm";
import Test from "./components/Test.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickHandler(event, param) {
        console.log("clicked");
        console.log("EVENT ", event);
        console.log("Second Parameter", param);
    }

    render() {
        var data = {
            image: "http://lorempixel.com/400/200/abstract/1/"
        };

        return (
            <div className="App">
                <button onClick={event => this.onClickHandler(event, 1)}>
                    Click Here
                </button>
                <button onClick={event => this.onClickHandler(event, 10000)}>
                    Another
                </button>
                <Test title="Check this out" />
                <Banner image={data.image} />
                <MyForm />

                <div className="container">
                    <CardList />
                </div>
                <FAQList />
            </div>
        );
    }
}

export default App;
