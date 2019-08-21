import React from 'react';
import './css/calculadora.css';

import Lista from './Lista';

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pantalla: "",
            valorInicial: ""
        }

        this.pulsa = this.pulsa.bind(this);
    }

    pulsa(tecla) {
        let valor = tecla;
        let valorNum;
        if (!isNaN(valor)) {
            valor = this.state.pantalla + tecla;
        }
        this.setState({
            pantalla: valor,
            valorInicial: valorNum
        });
        console.log(this.state.valorInicial);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <div className="pantalla">
                            <div className="input-group mt-1">
                                <input value={this.state.pantalla} type="text" className="form-control text-right" id="result" aria-label="Large" aria-describedby="inputGroup-sizing-sm" readOnly></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
                <Lista pulsa={this.pulsa} celdas={["1", "2", "3", "*"]} />
                <Lista pulsa={this.pulsa} celdas={["4", "5", "6", "/"]} />
                <Lista pulsa={this.pulsa} celdas={["7", "8", "9", "-"]} />
                <Lista pulsa={this.pulsa} celdas={["0", "C", "=", "+"]} />
            </div>
        );
    }
}



export default Calculadora;