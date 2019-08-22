import React from 'react';
import './css/calculadora.css';

import Lista from './Lista';

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pantalla: "",
            valor: "",
            operador: "",
            resultado: 0
        };

        this.pulsa = this.pulsa.bind(this);
    }

    pulsa(tecla) {
        let valor, pantalla, resultado,operador;


        valor = this.state.valor + tecla;
        if (!isNaN(tecla)) {
            operador = tecla;

            if (this.state.pantalla == resultado) {
                pantalla = "";
                pantalla = tecla;
            }
            else if(this.state.operador == "+" || this.state.operador == "-" || this.state.operador == "*" || this.state.operador == "/" ){
                pantalla = tecla;
            }
            else if(this.state.operador == tecla){
                pantalla = tecla;
            }
            else {
                pantalla = this.state.pantalla + tecla;
            }

        }
        else {

            pantalla = tecla;
            if (tecla == "=") {
                pantalla = "";
                valor = valor.slice(0, valor.length - 1);
                resultado = eval(valor);
                pantalla = resultado;
                valor = resultado;
            }
            else if (tecla == "C") {
                pantalla = "";
                valor = "";
            }
        }


        

        this.setState({
            pantalla: pantalla,
            valor: valor,
            operador: tecla
        });

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