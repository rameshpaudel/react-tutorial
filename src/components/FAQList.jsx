import React, { Component } from 'react';
import FAQ from './FAQ'

const faqs = require('../data/faq.json');

class FAQList extends Component {

    generateFAQ(){
        return faqs.map((value,index) => {
            return <FAQ key={index} title={value.title} description={value.description} />
        })
    }
    render() {
        return (
            <div style={{ width: "80%" }}  className="center">
                {this.generateFAQ()}
            </div>
        );
    }
}

export default FAQList;