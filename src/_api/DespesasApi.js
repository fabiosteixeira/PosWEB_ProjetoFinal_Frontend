const axios = require('axios')
import config from 'config'
import { authHeader } from '../_helpers';

export class DespesasApi {

    static getDespesas(){

            return new Promise((resolve, reject) => {

            let responseJson = {}
            axios({
                method: 'get',
                url: `${config.apiUrl}/despesa/`,
                headers: authHeader()
            })
                .then(function(response){
                    resolve(responseJson = response.data);
                })
                .catch(function (error){
                    console.log(error)
                    reject()
                })

            // resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
        });

    }

}