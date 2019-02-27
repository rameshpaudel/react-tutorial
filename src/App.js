import React, { Component } from "react";
import Banner from "./components/Banner";
import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import Paragraph from "./components/Paragraph";
import FAQList from "./components/FAQList";
import Input from "./components/Input";

class App extends Component {
    onClickHandler() {
        alert("SHOW TIME");
    }

    render() {
        var data = {
            image: "http://lorempixel.com/400/200/abstract/1/"
        };

        return (
            <div className="App">
                {/* <Paragraph />
        <Banner image={data.image}/>
        <CardList />
        <br/>
        <hr/>
        

        <CardList show={4}>
          <Banner/>
        </CardList>

        
        <br/>
        <hr/>
        <CardList /> */}
                <Input />
                <hr />
                <FAQList />
            </div>
        );
    }
    generateTitle() {
        return "Hello World ";
    }
}

export default App;
