import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supportedText: '',
        }
    } // end of constructor

    handleChangeForSupported = event => {
        const entry = event.target.value
        this.setState({
            supportedText: entry,
        })
    } // end of handleChangeForSupported

    supportedEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'support', payload: this.state.supportedText};
        this.props.dispatch(action);
    } // end of supportedEntry

    render() {
        return (
        <div>
            <div className="pages">
                <h3>Page: 3 of 4</h3>
            </div>
                <h4>How well are you feeling supported?</h4> 
                <input type="number" onChange={this.handleChangeForSupported} placeholder="scale 1 to 10"/>
                {/* <button onClick={this.supportedEntry}>Submit</button> */}
                {/* <Link to="/2">Back</Link> */}
                {/* <Link to="/4">Next</Link> */}
                <Link to="/4" style={{textDecoration:'none'}} onClick={this.supportedEntry}>NEXT</Link>
            </div> 
        ); // end of return
    } // end of render
} // end of PageThree


export default connect()(PageThree);