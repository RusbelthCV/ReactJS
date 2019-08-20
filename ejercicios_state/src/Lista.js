import React from 'react';

class Lista extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ciudades: this.props.items,
            ciudadesFiltradas: this.props.items
        };
        this.busqueda = this.busqueda.bind(this);
        this.copied = this.copied.bind(this);
    }
    copied(e){
        let toCopy =e.target.innerHTML;
        let input = document.getElementsByClassName("form-control")[0];
        input.value = toCopy;
    }
    busqueda(e){
        let ciudad = e.target.value.toLowerCase();
        let ciudadArray = (this.props.items).filter(element => element.toLowerCase().indexOf(ciudad) > -1);
        this.setState({
            ciudades: this.props.items,
            ciudadesFiltradas: ciudadArray
        });
    }
    render() {
        let array = this.state.ciudadesFiltradas;
        const content = array.map((valor) => <tr key={valor}>
            <td onClick = {this.copied}>
                {valor}
            </td>
        </tr>);
        return (
            <div>
                <div className="input-group my-5">
                    <div className="input-group-prepend">
                        <label className="input-group-text">Buscar</label>
                    </div>
                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onKeyUp = {this.busqueda} tabIndex = "0"></input>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <td>Ciudad</td>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Lista;