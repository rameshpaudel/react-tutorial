import React, { Component } from "react";
import Banner from "./components/Banner";
import CardList from "./components/CardList.js";
import FAQList from "./components/FAQList";
import Input from "./components/Input";
import MyForm from "./components/MyForm";
import Test from "./components/Test";

class App extends Component {
    render() {
        var data = {
            image: "http://lorempixel.com/400/200/abstract/1/"
        };

        return (
            <div className="App">
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
