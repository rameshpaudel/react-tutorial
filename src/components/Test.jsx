import React from 'react';

//Example of HOC
// Higher Order Component
export default function Test(props) {
    var test = function(){
        return <h3>I can run inside here</h3>
    }
    return (
        <div>
            <h1>{props.title || `TEst this out`}</h1>
            {test()}
        </div>
    );
}