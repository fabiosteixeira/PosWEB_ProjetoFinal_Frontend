import React, { useState } from "react";
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';

function NovaReceitaPage () {

    return (
        <div>
           Tela de nova receita
            <style jsx>{`
            .nomeUser {
                margin-right: 10px;
            }
            `}</style>
        </div>
    )
}

// function mapStateToProps(state) {
//     const { authentication } = state;
//     const { user } = authentication;
//     return {
//         user        
//     };
// }

// const connectedMenu = connect(mapStateToProps)(Menu);
// export { connectedMenu as Menu };

function mapStateToProps(state) {
}

const connectedNovaReceitaPage = connect(mapStateToProps)(NovaReceitaPage);
export { connectedNovaReceitaPage as NovaReceitaPage }; 
