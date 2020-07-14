import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from './_helpers';
import { App } from './_views';

import { registerServiceWorker } from './RegisterServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css';

registerServiceWorker()

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);