import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supportedText: '',
        }
    }

    handleChangeForSupported = event => {
        const entry = event.target.value
        this.setState({
            supportedText: entry,
        })
    }

    supportedEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'support', payload: this.state.supportedText};
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>
                <h3>PageThree</h3>
                <h4>How well are you feeling supported?</h4> 
                <input type="number" onChange={this.handleChangeForSupported} placeholder="How well are you being supported?"/>
                <button onClick={this.supportedEntry}>Submit</button>
                {/* <Link to="/2">Back</Link> */}
                <Link to="/4">Next</Link>
            </div>
            
        );
    }
}


export default connect()(PageThree);