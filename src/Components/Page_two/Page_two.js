import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understandingText: '',
        }
    } // end of constructor

    handleChangeForUnderstanding = event => {
        const entry = event.target.value
        this.setState({
            understandingText: entry,
        })
    } // end of handleChangeForUnderstanding

    understandingEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'understanding', payload: this.state.understandingText};
        this.props.dispatch(action);
    } // end of understandingEntry

    render() {
        return (
            <div>
                <div className="pages">
                <h3>Page: 2 of 4</h3>
                </div> 
                <h4>How well are you understanding the content?</h4>
                <input type="number" 
                    onChange={this.handleChangeForUnderstanding} 
                    value={this.understandingText} placeholder="Scale 1 to 10"/>
                {/* <button onClick={this.understandingEntry}>Submit</button> */}
                {/* <Link to="/">Back</Link> */}
                {/* <Link to="/3">Next</Link> */}
                <Link to="/3" style={{textDecoration:'none'}} onClick={this.understandingEntry}>NEXT</Link>

            </div>
        ); // end of return
    } // end of render
} // end of PageTwo


export default connect()(PageTwo);