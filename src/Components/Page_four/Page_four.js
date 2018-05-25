import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageFour extends Component {

    render() {
        return (
            <div>
                <h3>PageFour</h3>
                <h4>Any comments you want to leave?</h4> 
                <input type="text" placeholder="Any comments you want to leave?"/>

            </div>
        );
    }
}


export default connect()(PageFour);