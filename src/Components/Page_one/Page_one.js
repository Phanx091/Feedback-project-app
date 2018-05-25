import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class PageOne extends Component {

    render() {
        return (
            <span>
                <div>
                    <h3>PageOne</h3>
                    <h4>How are you feeling today?</h4>
                    <input type="text" placeholder="How are you feeling today?"/>
                    <Link to="/page2">Next</Link>
                </div>
            </span>
            
        );
    }
}


export default connect()(PageOne);