import React, { Component } from "react";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "http://lorempixel.com/1300/200/technology",
                "http://lorempixel.com/1300/200/sports",
                "http://lorempixel.com/1300/200/abstract",
                "http://lorempixel.com/1300/200/nature"
            ],
            position: 0
        }
        
    }

    onNextClickHandler(){
        if(this.state.position < this.state.images.length){
            this.setState({
                position: this.state.position + 1
            });
        }
        console.log("Current image", this.state.images[this.state.position])
    }
    
    onPrevClickHandler(){
        console.log('[rev', this)
        if(this.state.position > 0){
            this.setState({
                position: this.state.position - 1
            });
        }
        console.log("Current poition", this.state.position)
    }
    
    render() {
        return (
            <div>
                <img
                    src={this.state.images[this.state.position]}
                    alt=""
                />
                <button onClick={ () => this.onPrevClickHandler() }>Prev</button>
                <button onClick={ this.onNextClickHandler.bind(this) }>Next</button>
                
                <section>{this.props.children};</section>
            </div> 
        );
    }
}

export default Banner;