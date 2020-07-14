import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from './_helpers';
import { App } from './_views';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

 if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('SW registered: ', registration);
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
        });
    });
    }
else
    console.log('Não existe suporte para serviceWorker.')