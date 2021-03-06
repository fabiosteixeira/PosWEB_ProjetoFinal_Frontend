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
        });
    }

    static getDespesa(id){
        return new Promise((resolve, reject) => {
            let responseJson = {}
            axios({
                method: 'get',
                url: `${config.apiUrl}/despesa/${id}/`,
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

    static sendDespesa(id, descricao, classificacao, dtvencimento, dtpagamento, valor){
        return new Promise((resolve, reject) => {
            let responseJson = {}
            let urlDestino
            if (id != null && id != "")
                urlDestino = `${config.apiUrl}/despesa/${id}/`
            else
                urlDestino = `${config.apiUrl}/despesa/`
            axios({
                method: 'post',
                url: urlDestino,
                headers: authHeader(),
                data: {
                    "id": id,
                    "descricao": descricao,
                    "classificacao": classificacao,
                    "data_vencimento": dtvencimento,
                    "data_pagamento": dtpagamento,
                    "valor": valor,
                    "formaPagamento": "",
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

    static deletaDespesa(id) {
        return new Promise((resolve, reject) => {
            let responseJson = {}
            axios({
                method: 'delete',
                url: `${config.apiUrl}/despesa/${id}/`,
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