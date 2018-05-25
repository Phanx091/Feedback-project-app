import React, { Component } from 'react';
import { connect } from 'react-redux';




class PageThree extends Component {

    render() {
        return (
            <div>
                <h3>PageThree</h3>
                <h4>How well are you feeling supported?</h4> 
                <input type="text" placeholder="How well are you feeling supported?"/>

                <button onClick={()=> {this.props.history.replace('/page4')}}>NEXT</button>
            </div>
            
        );
    }
}


export default connect()(PageThree);