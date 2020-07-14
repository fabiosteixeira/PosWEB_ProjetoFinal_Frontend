import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { DespesasApi } from '../../_api/DespesasApi'  
import { ReceitasApi } from '../../_api/ReceitasApi'  

class HomePage extends React.Component {  

    constructor(props){
        super(props)
        this.state = {despesas: [], receitas: []}
    }

    LoadDados = () => {
        DespesasApi.getDespesas().then(
            result => {
                if (result.eherro)
                    return
                this.setState({despesas: result})
            }
        )

        ReceitasApi.getReceitas().then(
            result => {
                if (result.eherro)
                    return
                this.setState({receitas: result})
            }
        )      
    }

    componentDidMount(){
        this.LoadDados();
    }

    render() {

        const data = [
            { name: 'food', uv: 1500, pv: 800}
          ];

        var totalDespesas = 0
        this.state.despesas.forEach(despesa => {
            totalDespesas += parseFloat(despesa.valor)
        })
        console.log(totalDespesas)

        var totalReceitas = 0
        this.state.receitas.forEach(receita => {
            totalReceitas += parseFloat(receita.valor)
        })
        console.log(totalReceitas)
        
        const dataGrafico = [{name: 'valores', Despesas: totalDespesas, Receitas: totalReceitas}]

        console.log('RENDER')
        const { user } = this.props;
        return (
            <div>
                <div className="containerGrafico d-flex justify-content-center">
                    <div className="bar-chart-wrapper">
                    <BarChart width={500} height={300} data={dataGrafico} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XPathExpression/>
                        <XAxis dataKey="name"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        { <Bar dataKey="Despesas" fill="#f00c0c" /> }
                        { <Bar dataKey="Receitas" fill="#0f12bf" /> }
                    </BarChart>
                    </div>                    
                </div>            
                <style jsx>{`
                    .containerGrafico {
                        margin-top: 20px;
                    }
                `}</style>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };