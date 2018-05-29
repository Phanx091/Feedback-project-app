import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Moment from 'react-moment';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackList: []
        };
       
    } // end of constructor 

    getFeedbackData = () => {
        axios('/api/feedback').then((response) => {
            this.setState({
                feedbackList: response.data,
            });
            console.log(response.data);
        }).catch((error) => {
            alert(`ERROR on axios.get ${error}`);
        });
    } // end of getFeedbackData

    componentDidMount() { // this function is an on ready function 
        this.getFeedbackData();
    } // end of componentDidMount

    deleteHandleForFeedback = (id) => { // handle function that request a delete from server by id
            axios({
                method: "DELETE",
                url: `/api/feedback/${id}`
            })
            .then(response => {
                this.getFeedbackData();
            })
            .catch(error => {
                console.log(`ERROR on deleteHandleForFeedback: ${error}`);
            });
    }; // end of deleteHandleForFeedback

    render(props) {
        return (
            <div>                
                <h3>Admin Page</h3> 
                <table border="1">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map(data => (
                        <tr key={data.id}>
                        <td>{data.feeling}</td>
                        <td>{data.understanding}</td>
                        <td>{data.support}</td>
                        <td>{data.comments}</td>
                        <td><Moment format="MM/DD/YYYY">{data.date}</Moment></td>
                        <td><button onClick={this.deleteHandleForFeedback.bind(this, data.id)}>delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(Admin);

