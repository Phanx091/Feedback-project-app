import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class PageFive extends Component {
  
    render() {
        return (
            <span>
                <div>
                    <h3>Thank You</h3>
                    <button onClick={() => {this.props.history.replace('/')}}>Leave New Feedback</button>
                </div>
            </span>
            
        );
    }
}

export default connect()(PageFive);