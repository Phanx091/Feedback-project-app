import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feelingText: '',
        }
    } // end of constructor

    handleChangeForFeeling = event => {
        const entry = event.target.value
        this.setState({
            feelingText: entry,
        })
    } // end of handleChangeForFeeling

    feelingEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'feeling', payload: this.state.feelingText};
        this.props.dispatch(action);
        this.props.history.push(this.props.nextPage);
    } // end of feelingEntry

    render() {
        return (
            <div>
                <div className="pages">
                    <h3>Page: 1 of 4</h3>
                </div>
                <h4>How are you feeling today?</h4>
                <input type="number" 
                    onChange={this.handleChangeForFeeling} 
                    value={this.feelingText} placeholder="scale 1 to 10"/>
                {/* <button onClick={this.feelingEntry}>Submit</button> */}
                {/* <Link to="/2">Next to page 2</Link> */}
                {/* <button onClick={(this.feelingEntry.bind(this) => {this.props.history.replace('/2')}}>NEXT</button> */}
                {/* <Link role="button" to="/2" onClick={this.feelingEntry}/> */}
                <Link to="/2" style={{textDecoration:'none'}} onClick={this.feelingEntry}>NEXT</Link>
            </div>   
        ); // end of return
    } // end of render 
} // end of PageOne

export default connect()(PageOne);