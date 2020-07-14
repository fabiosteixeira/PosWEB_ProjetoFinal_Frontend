import React, { useState } from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';

function Menu (props) {

    const user = props.user

    if (!user)
        return <div></div>
    else
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Controlar finanças</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/despesa">Despesas</NavDropdown.Item>
                            <NavDropdown.Item href="/receita">Receitas</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <div className="nomeUser">Bem-vindo, {user.name}</div>
                        <Form inline>
                            <Button variant="danger" href="/login">Sair</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <style jsx>{`
                .nomeUser {
                    margin-right: 10px;
                }
                `}</style>
            </div>
        )
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user        
    };
}

const connectedMenu = connect(mapStateToProps)(Menu);
export { connectedMenu as Menu };
