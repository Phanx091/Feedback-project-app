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
        axios.get('/api/feedback').then((response) => {
            this.setState({
                feedbackList: response.data,
            });
        }).catch((error) => {
            alert(`ERROR on axios.get ${error}`);
        });
    } // end of constructor 

                


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
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect()(Admin);

