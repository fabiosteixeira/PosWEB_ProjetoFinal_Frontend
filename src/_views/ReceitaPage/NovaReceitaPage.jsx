import React, { useState, useEffect } from "react";
import { Col, Form, Button, Row } from 'react-bootstrap'
import { ReceitasApi } from '../../_api/ReceitasApi'  
 
const novaReceitaPage = function NovaReceitaPage (props) {

    const urlParams = new URLSearchParams(props.location.search);
    const idParam = urlParams.get('id')

    const [id, setId] = useState([])   
    const [descricao, setDescricao] = useState([])   
    const [classificacao, setClassificacao] = useState([])   
    const [dtExpectativa, setDtExpectativa] = useState([]) 
    const [dtRecebimento, setDtRecebimento] = useState([]) 
    const [valor, setValor] = useState([]) 

    useEffect(() => {
        const LoadReceita = () => {
            ReceitasApi.getReceita(idParam).then(
                result => {
                    if (result.eherro)
                        return
                    if (result.id != null)
                        setId(result.id)
                    if (result.descricao != null)
                        setDescricao(result.descricao)
                    if (result.classificacao != null)
                        setClassificacao(result.classificacao)
                    if (result.data_expectativa != null)
                        setDtExpectativa(result.data_expectativa)
                    if (result.data_recebimento != null)
                        setDtRecebimento(result.data_recebimento)
                    if (result.valor != null)
                        setValor(result.valor)
                }
            )
        }
        if (idParam != null)
            LoadReceita()
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        ReceitasApi.sendReceita(id, descricao, classificacao, dtExpectativa, dtRecebimento, valor).then(function (result){
            if (result.eherro)
                alert("Objeto não enviado corretamente: " + result.message)
            else {
                props.history.push('/receita')
            }
        })
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        if (confirm("Deseja mesmo excluir o registro?")) {
            ReceitasApi.deletaReceita(id).then(function (result){
                if (result.eherro)
                    alert("Objeto não enviado corretamente: " + result.message)
                else {
                    props.history.push('/receita')
                }
            })
        }
    }

    var title
    if (idParam == null){
        title = "Nova receita"
    } else {
        title = "Detalhe da receita"
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

                <Form.Group as={Row} controlId="formHorizontalDtExpectativa">
                <Form.Label column sm={2}>
                    Data da expectativa
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="date" value={dtExpectativa} onChange={e => setDtExpectativa(e.target.value)}/>
                </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDtRecebimento">
                <Form.Label column sm={2}>
                    Data de recebimento
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="date" value={dtRecebimento} onChange={e => setDtRecebimento(e.target.value)}/>
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

export { novaReceitaPage as NovaReceitaPage }
