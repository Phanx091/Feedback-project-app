import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class PageThree extends Component {

    render() {
        return (
            <div>
                <h3>PageThree</h3>
                <h4>How well are you feeling supported?</h4> 
                <input type="text" placeholder="How well are you feeling supported?"/>
                <Link to="/page4">Next</Link>
            </div>
            
        );
    }
}


export default connect()(PageThree);