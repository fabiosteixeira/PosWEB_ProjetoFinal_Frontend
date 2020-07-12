import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class SigninPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { nome, email, password } = this.state;
        const { dispatch } = this.props;
        if (nome && email && password) {
            dispatch(userActions.create(nome, email, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { nome, email, password, submitted } = this.state;
        return (
            <div>
                <div className="d-flex justify-content-center">                
                    <form name="form" onSubmit={this.handleSubmit} >
                        <h2 className="d-flex justify-content-center">Cadastrar novo usuário</h2>
                        <div className={'form-group' + (submitted && !nome ? ' has-error' : '')}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" name="nome" value={nome} onChange={this.handleChange} />
                            {submitted && !nome &&
                                <div className="help-block">O campo nome é obrigatório</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !nome ? ' has-error' : '')}>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                            {submitted && !email &&
                                <div className="help-block">O campo email é obrigatório</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">O campo password é obrigatório</div>
                            }
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <button className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>                                    
                </div>                
            </div>
        );
    }
}

function mapStateToProps(state) {

}

const connectedSigninPage = connect(mapStateToProps)(SigninPage);
export { connectedSigninPage as SigninPage }; 