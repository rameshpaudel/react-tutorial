import React, { Component } from "react";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "http://lorempixel.com/1300/500/nature",
                "http://lorempixel.com/1300/500/sports",
                "http://lorempixel.com/1300/500/abstract",
                "http://lorempixel.com/1300/500/nature"
            ],
            position: 0
        }
        
    }

    onNextClickHandler(){
        if(this.state.position < this.state.images.length - 1){
            this.setState(state=> ({
                position: state.position + 1
            }));
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
            <div className="banner">
                <img
                    src={this.state.images[this.state.position]}
                    alt=""
                />
                <button className="btn left" onClick={ () => this.onPrevClickHandler() }> &lt; </button>
                <button className="btn right" onClick={ this.onNextClickHandler.bind(this) }> &gt; </button>
                
                <section>{this.props.children};</section>
            </div> 
        );
    }
}

export default Banner;