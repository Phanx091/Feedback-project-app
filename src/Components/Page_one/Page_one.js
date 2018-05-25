import React, { Component } from 'react';
import { connect } from 'react-redux';




class PageOne extends Component {

    render() {
        return (
            <span>
                <div>
                    <h3>PageOne</h3>
                    <h4>How are you feeling today?</h4>
                    <input type="text" placeholder="How are you feeling today?"/>
                    <button onClick={()=> {this.props.history.replace('/page2')}}>NEXT</button>
                </div>
            </span>
            
        );
    }
}


export default connect()(PageOne);