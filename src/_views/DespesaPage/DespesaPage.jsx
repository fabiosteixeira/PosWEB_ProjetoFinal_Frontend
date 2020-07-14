import React, { useState, useEffect, Suspense } from "react";
import { Table } from 'react-bootstrap'
import { DespesasApi } from '../../_api/DespesasApi'  

const despesaPage = function DespesaPage () {

    const [despesas, setDespesas] = useState([])

    useEffect(() => {
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
        LoadDespesas();
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h5>Lista de despesas</h5>
            </div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Classificação</th>
                <th>Data do vencimento</th>
                <th>Data do pagamento</th>
                <th>Forma de pagamento</th>
                <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {despesas.map(despesa => 
                    <tr key={despesa.id} >
                    <td>{despesa.id}</td>
                    <td>{despesa.classificacao}</td>
                    <td>{despesa.data_vencimento}</td>
                    <td>{despesa.data_pagamento}</td>
                    <td>{despesa.formaPagamento}</td>
                    <td>{despesa.valor}</td>
                    </tr>
                )}
            </tbody>
            </Table>
            {/* <Suspense fallback={<h1>Carregando despesas...</h1>}>
                {despesas.map(despesa => 
                    <div>                        
                        {despesa.classificacao}
                    </div>
                )}
            </Suspense> */}
            <style jsx>{`
                h5 {
                    margin-top: 10px;
                }
            `}</style>
        </div>
    )
}

export { despesaPage as DespesaPage }; 
