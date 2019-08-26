import React from 'react';


class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "",
            color: "alert "
        };
        this.escritura = this.escritura.bind(this);
        this.enviar = this.enviar.bind(this);
        this.valorSelect = this.valorSelect.bind(this);
    }
    valorSelect(e){
        let color = this.state.color + e.target.value;
        this.props.selectChange(color);

        this.setState({
            color: color
        });
        console.log(this.state.color);
    }
    enviar(e) {
        e.preventDefault();
        
        this.props.enviar(this.state.texto);

        this.setState({
            texto: ""
        });
    }
    escritura(e) {

        this.setState({
            texto: e.target.value
        });

    }
    render() {
        return (
            <div className="col-6">
                <form onSubmit={(e) => this.enviar(e)}>
                    <div className="form-group">
                        <label htmlFor="textoTarea" className="form-control-label">Tarea</label>
                        <input type="text" className="form-control" id="textoTarea" onChange={this.escritura} value={this.state.texto} />
                    </div>
                    <div className="form-group">
                        <select className ="custom-select" id="inputGroupSelect01" onChange = {this.valorSelect}>
                            <option value = "alert-primary">Trabajo</option>
                            <option value="alert-success">Personal</option>
                            <option value="alert-danger">Urgente</option>
                            <option value="alert-warning">Família</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario;