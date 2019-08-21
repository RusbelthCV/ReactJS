import React from 'react';


class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            click: false
        };
    }
    dividir(valor){
        console.log(valor);
    }
    render() {
        
        let arrayValores = (this.props.celdas).map((valor) =>
            <div onClick={()=>this.props.pulsa(valor)} className="celda col-2 text-center my-1" key = {valor} >{valor}</div>
        );
        return (
            <>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4 d-inline-flex justify-content-between">
                        {arrayValores}
                    </div>
                    <div className="col-6"></div>
                </div>
            </>
        );
    }
}

export default Lista;