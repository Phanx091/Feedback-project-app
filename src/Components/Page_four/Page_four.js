import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);


class PageFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
        }
    }
    handleChangeForComment = event => {
        const entry = event.target.value
        this.setState({
            commentText: entry,
        })
    }

    commentEntry = () => {
        const action = { type: "FORM_ENTRY", property: 'comments', payload: this.state.commentText};
        this.props.dispatch(action);
        this.props.dispatch({type: "SUBMIT_FEEDBACK"})       
    }

    render() {
        return (
            <div>
                <h3>PageFour</h3>
                <h4>Any comments you want to leave?</h4> 
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <input type="text" onChange={this.handleChangeForComment} 
                    value={this.commentText}
                    placeholder="Any comments you want to leave?"/>
                <button onClick={this.commentEntry}>Submit</button>
                {/* <Link to='/3'>Back</Link> */}

            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(PageFour);