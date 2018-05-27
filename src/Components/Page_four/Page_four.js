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

    
    // commentEntry = (submitAllEntriesData) => {
    //   axios({
    //     method: 'POST',
    //     url: '/entry',
    //     data: submitAllEntriesData
    //   }).then((response) => {
    //     console.log(response.status);
    //     this.setState({})
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }

    // sendDataToServer = () => {
    //     axios.post('/api/entry', this.props.reduxState).then((response) => {
    //         console.log('success!');
    //     }).catch((error) => {
    //         alert('There was a problem...');
    //     });
    // }



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




        // const feedback = {
        //     feeling: this.props.reduxState.feeling,
        //     understanding: this.props.reduxState.understanding,
        //     support: this.props.reduxState.support,
        //     comments: this.props.reduxState.comments,
        // }
       
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