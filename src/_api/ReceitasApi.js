const axios = require('axios')
import config from 'config'
import { authHeader } from '../_helpers';

export class ReceitasApi {

    static getReceitas(){
        return new Promise((resolve, reject) => {
            let responseJson = {}
            axios({
                method: 'get',
                url: `${config.apiUrl}/receita/`,
                headers: authHeader()
            })
                .then(function(response){
                    resolve(responseJson = response.data);
                })
                .catch(function (error){
                    console.log(error)
                    reject()
                })
        });
    }

    static getReceita(id){
        return new Promise((resolve, reject) => {
            let responseJson = {}
            axios({
                method: 'get',
                url: `${config.apiUrl}/receita/${id}/`,
                headers: authHeader()
            })
                .then(function(response){
                    resolve(responseJson = response.data);
                })
                .catch(function (error){
                    console.log(error)
                    reject()
                })
        });
    }

    static sendReceita(id, descricao, classificacao, dtexpectativa, dtrecebimento, valor){
        return new Promise((resolve, reject) => {
            let responseJson = {}
            let urlDestino
            if (id != null && id != "")
                urlDestino = `${config.apiUrl}/receita/${id}/`
            else
                urlDestino = `${config.apiUrl}/receita/`
            axios({
                method: 'post',
                url: urlDestino,
                headers: authHeader(),
                data: {
                    "id": id,
                    "descricao": descricao,
                    "classificacao": classificacao,
                    "data_expectativa": dtexpectativa,
                    "data_recebimento": dtrecebimento,
                    "valor": valor,
                    "formaRecebimento": "",
                    "situacao": "",
                    }
            }).then(function(response){
                resolve(responseJson = response.data);
                return responseJson;
            })
            .catch(function (error){
                console.log(error)
                reject()
            })
        });
    }

    static deletaReceita(id) {
        return new Promise((resolve, reject) => {
            let responseJson = {}
            axios({
                method: 'delete',
                url: `${config.apiUrl}/receita/${id}/`,
                headers: authHeader()
            })
                .then(function(response){
                    resolve(responseJson = response.data);
                })
                .catch(function (error){
                    console.log(error)
                    reject()
                })
        });
    }

}