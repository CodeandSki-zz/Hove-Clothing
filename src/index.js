import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './redux/store';
ReactDOM.render(
    <Provider store={Store.store}>
        <BrowserRouter> 
            <PersistGate persistor={Store.persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

