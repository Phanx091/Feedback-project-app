import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class PageTwo extends Component {

    render() {
        return (
            <div>
                <h3>PageTwo</h3> 
                <h4>How well are you understanding the content?</h4>
                <input type="text" placeholder="How well are you understanding the content?"/>
                <Link to="/page3">Next</Link>
            </div>
        );
    }
}


export default connect()(PageTwo);