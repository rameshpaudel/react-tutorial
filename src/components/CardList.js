import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render(){
        return(
            <div>
                <div className="quarter">
                    <Card title="Test  this out" />
                </div>
                <div className="quarter">
                    <Card />
                </div>
                <div className={ "quarter"}>
                    <Card />
                </div>
                <div className="quarter">
                    <Card />
                </div>
            </div>
        )
    }
}

export default CardList;