import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const user = {
    id: undefined,
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    flagged: '',
    date: '',
};

class PageFour extends Component {
    constructor() {
        super();
        this.state = user;
    }


    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
    
    
    handleButtonSubmit = (newUser) => {
      axios({
        method: 'POST',
        url: '/entry',
        data: newUser
      }).then((response) => {
        console.log(response.status);
        this.setState({})
      }).catch((error) => {
        console.log(error);
      });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleButtonSubmit}>
                <h3>PageFour</h3>
                <h4>Any comments you want to leave?</h4> 
                <input onChange={this.handleChange} placeholder="Any comments you want to leave?" value={this.state.comments} name="comments" />
                <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}


export default connect()(PageFour);