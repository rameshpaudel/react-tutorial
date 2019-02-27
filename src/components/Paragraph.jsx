import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        var arr = [1, 2, 3, 5, 6, 8, 9, 0];
        var paragraph = arr.map((value, index) => {
            return <h3 key={index}>Test it out {value}</h3>
        });

        return (
            <div>
                {paragraph}        
            </div>
        );
    }
}

export default Paragraph;
