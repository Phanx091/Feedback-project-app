import React, { Component } from 'react';
import { connect } from 'react-redux';





class PageTwo extends Component {

    render() {
        return (
            <div>
                <h3>PageTwo</h3> 
                <h4>How well are you understanding the content?</h4>
                <input type="text" placeholder="How well are you understanding the content?"/>

                <button onClick={()=> {this.props.history.replace('/page3')}}>NEXT</button>
            </div>
        );
    }
}


export default connect()(PageTwo);