import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: ""
        };
    }

    onInputChange(data){
        
        this.setState({
            title: data.target.value
        });
    }
    
    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <input type="text" onChange={ (data) => this.onInputChange(data) }/>
            </div>
        );
    }
}

export default Input;
