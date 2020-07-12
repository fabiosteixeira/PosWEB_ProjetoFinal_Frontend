import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll
};

const axios = require('axios')

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                        "email": username,
                        "password": password
                        })
    };

    return fetch(`${config.apiUrl}/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });

    // return new Promise((resolve, reject) => {

    //     let responseJson = {}
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:8000/login/',
    //         // url: 'http://trab-final-pos-backend.herokuapp.com/login/',
    //         data: {
    //             "email": username,
    //             "password": password
    //             }
    //     })
    //         .then(function(response){
    //             // console.log(response.data)
    //             responseJson = response.data;
    //         })
    //         .catch(function (error){
    //             console.log(error)
    //         })

    //     resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
    // });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log('aqui')
        console.log(data)
        if (!response.ok || data['eherro']) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}