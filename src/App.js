import React, { Component } from "react";
import Banner from "./components/Banner";
import CardList from "./components/CardList.js";
import FAQList from "./components/FAQList";
import Input from "./components/Input";
import MyForm from "./components/MyForm";
import Test from './components/Test'
import ApiSearch from "./components/APISearch";

// import Card from "./components/Card.js";
// import Paragraph from "./components/Paragraph";
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
                <hr />
                <Test title="Check this out"/>
                <br />
                <MyForm />
                <Banner image={data.image} />
                <CardList />
                {/* <Paragraph />
                    <br/>
                    <hr/>
                    

                    <CardList show={4}>
                    <Banner/>
                    </CardList>

                    
                    <br/>
                    <hr/>
                    <CardList /> 
                */}
                <Input />
                <hr />
                <FAQList />
                <hr/>
                <ApiSearch/>
                
                
            </div>
        );
    }
}

export default App;
