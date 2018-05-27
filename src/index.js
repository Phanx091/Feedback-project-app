import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';



const formEntryReducer = (state = [], action) => {
    if(action.type === 'FORM_ENTRY') {
        console.log(`formEntryReducer ADD, ${action}`);
        return {...state, [action.property]:action.payload }
    } else if(action.type ==='SUBMIT_FEEDBACK') {
        axios({
            method: "POST",
            url: "/api/feedback",
            data: state,
        }).then((response) => {
            console.log('success!');
        }).catch((error) => {
            alert('There was a problem...on axios post');
        });
        // axios.post('/api/feedback', this.props.reduxState).then((response) => {
        //     console.log('success!');
        // }).catch((error) => {
        //     alert('There was a problem...');
        // });
    }

    return state;
};
const storeInstance = createStore(
    combineReducers({
        formEntryReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
