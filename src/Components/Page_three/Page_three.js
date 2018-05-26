import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageFour from '../Page_four/Page_four';




class PageThree extends Component {


    render() {
        return (
            <div>
                <h3>PageThree</h3>
                <h4>How well are you feeling supported?</h4> 
                {/* <input type="text" placeholder="How well are you feeling supported?"/> */}
                <PageFour onChange={this.props.handleChange} placeholder="How well are you understanding the content?" name="feeling"/>
                <button onClick={()=> {this.props.history.replace('/page4')}}>NEXT</button>
            </div>
            
        );
    }
}


export default connect()(PageThree);