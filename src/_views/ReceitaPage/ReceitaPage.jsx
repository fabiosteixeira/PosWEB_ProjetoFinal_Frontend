import React, { useState } from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';

function ReceitaPage () {

    return (
        <div>
           Tela de receitas
            <style jsx>{`
            .nomeUser {
                margin-right: 10px;
            }
            `}</style>
        </div>
    )
}

function mapStateToProps(state) {
}

const connectedReceitaPage = connect(mapStateToProps)(ReceitaPage);
export { connectedReceitaPage as ReceitaPage }; 
