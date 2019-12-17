import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from './reducers';

//Need to wrap Provider and pass store
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
