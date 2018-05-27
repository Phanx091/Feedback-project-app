import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';






class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understandingText: '',
        }
    }


    handleChangeForUnderstanding = event => {
        const entry = event.target.value
        this.setState({
            understandingText: entry,
        })
    }

    understandingEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'understanding', payload: this.state.understandingText};
        this.props.dispatch(action);
    }



    render() {
        return (
            <div>
                <h3>PageTwo</h3> 
                <h4>How well are you understanding the content?</h4>
                <input type="number" 
                    onChange={this.handleChangeForUnderstanding} 
                    value={this.understandingText} placeholder="How well are you understanding the content?"/>
                <button onClick={this.understandingEntry}>Submit</button>
                {/* <Link to="/">Back</Link> */}
                <Link to="/3">Next</Link>
            </div>
        );
    }
}


export default connect()(PageTwo);