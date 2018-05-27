import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const formEntryReducer = (state = [], action) => {
    if(action.type === 'FORM_ENTRY') {
        return {...state, [action.property]:action.payload }
        console.log(`formEntryReducer ADD, ${action}`);
    } else if(action.type === 'CLEAR_ALL') {
        return []
        console.log(`formEntryReducer CLEAR ${action}`)
    }
    return state;
}




const storeInstance = createStore(
    combineReducers({
        formEntryReducer,
    }),
    applyMiddleware(logger),
);




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
