import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [],
        }
        axios.get('/api/feedback').then(response => {
                    this.setState({
                        feedback: response.data,
                    });
                }).catch(error => {
                    alert('error on axios.get');
                })
    }



    render(props) {
        return (
            <div>
                <h3>Admin Page</h3> 
                <table>
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
                        {this.state.feedback.map(data => (
                            <tr key={data.id}>
                                <td>{data.feeling}</td>
                                <td>{data.understanding}</td>
                                <td>{data.support}</td>
                                <td>{data.comments}</td>
                                <td>{data.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}


export default connect()(Admin);