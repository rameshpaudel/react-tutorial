import React, { Component } from "react";

class Banner extends Component {    
    render() {
        return (
            <div>
                <img
                    src={
                        this.props.image ||
                        "http://lorempixel.com/1300/200/technology"
                    }
                    alt=""
                />
                
                <section>{this.props.children};</section>
            </div> 
        );
    }
}

export default Banner;
