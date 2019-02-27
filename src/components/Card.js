import React, { Component } from 'react';

class Card extends Component {

    render(){
        
        return(
            <div>
               <img src="http://lorempixel.com/200/200/technology/Test/" alt=""/>
               <h1>This is a card</h1>
               <p className="container">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, exercitationem?</p>
               <button onClick={ this.onClickHandler }>Click Here</button>
            </div>
        )
    }
}

export default Card;