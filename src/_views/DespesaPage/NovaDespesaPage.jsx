import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row } from 'react-bootstrap'
import { DespesasApi } from '../../_api/DespesasApi'  
 
const novaDespesaPage = function NovaDespesaPage (props) {

    const urlParams = new URLSearchParams(props.location.search);
    const idParam = urlParams.get('id')

    const [id, setId] = useState([])   
    const [descricao, setDescricao] = useState([])   
    const [classificacao, setClassificacao] = useState([])   
    const [dtVencimento, setDtVencimento] = useState([]) 
    const [dtPagamento, setDtPagamento] = useState([]) 
    const [valor, setValor] = useState([]) 

    useEffect(() => {
        const LoadDespesa = () => {
            DespesasApi.getDespesa(idParam).then(
                result => {
                    if (result.eherro)
                        return
                    if (result.id != null)
                        setId(result.id)
                    if (result.descricao != null)
                        setDescricao(result.descricao)
                    if (result.classificacao != null)
                        setClassificacao(result.classificacao)
                    if (result.data_vencimento != null)
                        setDtVencimento(result.data_vencimento)
                    if (result.data_pagamento != null)
                        setDtPagamento(result.data_pagamento)
                    if (result.valor != null)
                        setValor(result.valor)
                }
            )
        }
        if (idParam != null)
            LoadDespesa()
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        DespesasApi.sendDespesa(id, descricao, classificacao, dtVencimento, dtPagamento, valor).then(function (result){
            if (result.eherro)
                alert("Objeto não enviado corretamente: " + result.message)
            else {
                props.history.push('/despesa')
            }
        })
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        if (confirm("Deseja mesmo excluir o registro?")) {
            DespesasApi.deletaDespesa(id).then(function (result){
                if (result.eherro)
                    alert("Objeto não enviado corretamente: " + result.message)
                else {
                    props.history.push('/despesa')
                }
            })
        }
    }

    var title
    if (idParam == null){
        title = "Nova despesa"
    } else {
        title = "Detalhe da despesa"
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h5>{title}</h5>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalDescricao">
                    <Form.Label column sm={2}>
                    Descrição
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="input" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalClassificacao">
                    <Form.Label column sm={2}>
                    Classificação
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="input" value={classificacao} onChange={e => setClassificacao(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDtVencimento">
                <Form.Label column sm={2}>
                    Data de vencimento
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="date" value={dtVencimento} onChange={e => setDtVencimento(e.target.value)}/>
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDtPagamento">
                <Form.Label column sm={2}>
                    Data de pagamento
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="date" value={dtPagamento} onChange={e => setDtPagamento(e.target.value)}/>
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalValor">
                <Form.Label column sm={2}>
                    Valor
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={valor} onChange={e => setValor(e.target.value)}/>
                </Col>
                </Form.Group>
                

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Gravar</Button>
                    <span className="excluir">
                    <Button variant="danger" onClick={handleDelete}>Excluir</Button>
                    </span>
                    </Col>
                </Form.Group>
                </Form>
            <style jsx>{`
            h5 {
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .excluir{
                margin-left: 10px;
            }
            `}</style>
        </div>
    )
}

export { novaDespesaPage as NovaDespesaPage }
