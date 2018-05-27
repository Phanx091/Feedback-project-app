import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// const user = {
//     id: undefined,
//     feeling: '',
//     understanding: '',
//     support: '',
//     comments: '',
  
// };

class PageFour extends Component {
    constructor() {
        super();
        this.state = {
            commentText: '',
        }
    }


    // handleChange = event => {
    //     this.setState({
    //       [event.target.name]: event.target.value,
    //     });
    // }
    
    
    // handleButtonSubmit = (newUser) => {
    //   axios({
    //     method: 'POST',
    //     url: '/entry',
    //     data: newUser
    //   }).then((response) => {
    //     console.log(response.status);
    //     this.setState({})
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }


handleChangeForComment = event => {
    const entry = event.target.value
    this.setState({
        feelingText: entry,
    })
}

commentEntry = () => {
    const action = { type: "FORM_ENTRY", property: 'comment', payload: this.state.commentText};
    this.props.dispatch(action);
}

    

    render() {
        return (
            <div>
                <h3>PageFour</h3>
                <h4>Any comments you want to leave?</h4> 
                <input onChange={this.handleChangeForComment} 
                    value={this.state.commentText}
                    placeholder="Any comments you want to leave?"/>
                <button onClick={this.commentEntry}>Submit</button>
                <Link to='/3'>Back</Link>
            </div>
        );
    }
}


export default connect()(PageFour);