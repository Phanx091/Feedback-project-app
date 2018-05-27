import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feelingText: '',
            nextPage: '/2',
        }
    }

    handleChangeForFeeling = event => {
        const entry = event.target.value
        this.setState({
            feelingText: entry,
        })
    }

    feelingEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'feeling', payload: this.state.feelingText};
        this.props.dispatch(action);
        this.props.history.push(this.props.nextPage);
    }

    render() {
        return (
            <span>
                <div>
                    <h3>PageOne</h3>
                    <h4>How are you feeling today?</h4>
                    <input type="number" 
                        onChange={this.handleChangeForFeeling} 
                        value={this.feelingText} placeholder="How are you feeling today?"/>
                    <button onClick={this.feelingEntry}>Submit</button>
                    <Link to="/2">Next to page 2</Link>
                    {/* <button onClick={(this.feelingEntry) => {this.props.history.replace('/2')}}>NEXT</button> */}
                </div>
            </span>
            
        );
    }
}


export default connect()(PageOne);