import React, { useState, useEffect, Suspense } from "react";
import { Table } from 'react-bootstrap'
import { DespesasApi } from '../../_api/DespesasApi'  

const despesaPage = function DespesaPage () {

    const [despesas, setDespesas] = useState([])

    const LoadDespesas = () => {
        setDespesas([])
        DespesasApi.getDespesas().then(
            result => {
                console.log(result)
                if (result.eherro)
                    return
                setDespesas(result);
            }
        )
    }

    useEffect(() => {
        LoadDespesas()
    }, [])

    const handleDelete = (evt, id) => {
        evt.preventDefault();
        if (confirm("Deseja mesmo excluir o registro?")) {
            DespesasApi.deletaDespesa(id).then(function (result){
                if (result.eherro)
                    alert("Objeto não enviado corretamente: " + result.message)
                else {
                    // console.log(props.history.push('/despesa'))
                    LoadDespesas()
                }
            })
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h5>Lista de despesas</h5>
            </div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th>Classificação</th>
                <th>Data do vencimento</th>
                <th>Data do pagamento</th>
                <th>Valor</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {despesas.map(despesa => 
                    <tr key={despesa.id}>
                    <td>{despesa.id}</td>
                    <td>{despesa.descricao}</td>
                    <td>{despesa.classificacao}</td>
                    <td>{despesa.data_vencimento}</td>
                    <td>{despesa.data_pagamento}</td>
                    <td>{despesa.valor}</td>
                    <td className="center">
                        <a href={`/detaildespesa?id=${despesa.id}`}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </a>
                        <a href="#" onClick={e => handleDelete(e, despesa.id)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash lixeira" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                        </a>
                    </td>
                    </tr>
                )}
            </tbody>
            </Table>
            <style jsx>{`
                h5 {
                    margin-top: 10px;
                }
                .center {
                    text-align: center;   
                 }
                .lixeira {
                    margin-left: 10px;
                }
            `}</style>
        </div>
    )
}

export { despesaPage as DespesaPage }; 
